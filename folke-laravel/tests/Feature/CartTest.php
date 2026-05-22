<?php

use App\Models\Cart;
use App\Models\Product;
use App\Models\ProductVariant;
use App\Models\User;

beforeEach(function () {
    $this->withoutVite();
    $this->user = User::factory()->create();
    $this->product = Product::create([
        'name' => 'Test Product',
        'description' => 'A test product',
        'price' => 100000,
        'category' => 'test',
        'image_url' => '/test.png',
    ]);
    $this->variant = ProductVariant::create([
        'product_id' => $this->product->id,
        'name' => 'Black',
        'color' => '#000000',
    ]);
});

test('unauthenticated user is redirected from cart page', function () {
    $this->get('/cart')->assertRedirect('/login');
});

test('authenticated user sees empty cart', function () {
    $this->actingAs($this->user)
        ->get('/cart')
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('cart')
            ->has('cartItems', 0)
            ->where('subtotal', 0)
        );
});

test('adding an item creates a cart row', function () {
    $this->actingAs($this->user)
        ->post('/cart', [
            'product_id' => $this->product->id,
            'variant_id' => $this->variant->id,
            'quantity' => 1,
        ])
        ->assertRedirect();

    $this->assertDatabaseHas('carts', [
        'user_id' => $this->user->id,
        'product_id' => $this->product->id,
        'variant_id' => $this->variant->id,
        'quantity' => 1,
    ]);
});

test('adding same product+variant increments quantity', function () {
    $this->actingAs($this->user)
        ->post('/cart', [
            'product_id' => $this->product->id,
            'variant_id' => $this->variant->id,
            'quantity' => 1,
        ]);

    $this->actingAs($this->user)
        ->post('/cart', [
            'product_id' => $this->product->id,
            'variant_id' => $this->variant->id,
            'quantity' => 2,
        ]);

    $this->assertDatabaseHas('carts', [
        'user_id' => $this->user->id,
        'product_id' => $this->product->id,
        'quantity' => 3,
    ]);

    expect(Cart::where('user_id', $this->user->id)->count())->toBe(1);
});

test('updating quantity via patch works', function () {
    $item = Cart::create([
        'user_id' => $this->user->id,
        'product_id' => $this->product->id,
        'variant_id' => $this->variant->id,
        'quantity' => 2,
    ]);

    $this->actingAs($this->user)
        ->patch("/cart/{$item->id}", ['quantity' => 5])
        ->assertRedirect();

    expect($item->fresh()->quantity)->toBe(5);
});

test('cannot update another users cart item', function () {
    $other = User::factory()->create();
    $item = Cart::create([
        'user_id' => $other->id,
        'product_id' => $this->product->id,
        'variant_id' => $this->variant->id,
        'quantity' => 1,
    ]);

    $this->actingAs($this->user)
        ->patch("/cart/{$item->id}", ['quantity' => 5])
        ->assertForbidden();
});

test('removing an item via delete works', function () {
    $item = Cart::create([
        'user_id' => $this->user->id,
        'product_id' => $this->product->id,
        'variant_id' => $this->variant->id,
        'quantity' => 1,
    ]);

    $this->actingAs($this->user)
        ->delete("/cart/{$item->id}")
        ->assertRedirect();

    $this->assertDatabaseMissing('carts', ['id' => $item->id]);
});

test('clearing cart removes all items', function () {
    Cart::create([
        'user_id' => $this->user->id,
        'product_id' => $this->product->id,
        'variant_id' => $this->variant->id,
        'quantity' => 1,
    ]);

    $this->actingAs($this->user)
        ->delete('/cart')
        ->assertRedirect();

    expect(Cart::where('user_id', $this->user->id)->count())->toBe(0);
});
