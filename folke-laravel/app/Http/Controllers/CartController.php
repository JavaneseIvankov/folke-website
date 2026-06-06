<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddCartItemRequest;
use App\Models\Cart;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class CartController extends Controller
{
    public function index(Request $request): Response
    {
        $items = $request->user()->cartItems()
            ->with(['product', 'variant'])
            ->get();

        $subtotal = $items->sum(fn (Cart $item) => $item->product->price * $item->quantity);

        return Inertia::render('cart', [
            'cartItems' => $items,
            'subtotal' => $subtotal,
        ]);
    }

    public function store(AddCartItemRequest $request): RedirectResponse
    {
        $existing = $request->user()->cartItems()
            ->where('product_id', $request->product_id)
            ->where('variant_id', $request->variant_id)
            ->first();

        if ($existing) {
            $existing->increment('quantity', $request->quantity);
        } else {
            $request->user()->cartItems()->create($request->validated());
        }

        return back();
    }

    public function update(Request $request, Cart $cart): RedirectResponse
    {
        Gate::authorize('update', $cart);

        $data = $request->validate(['quantity' => 'required|integer|min:1']);
        $cart->update($data);

        return back();
    }

    public function destroy(Cart $cart): RedirectResponse
    {
        Gate::authorize('delete', $cart);
        $cart->delete();

        return back();
    }

    public function clear(Request $request): RedirectResponse
    {
        $request->user()->cartItems()->delete();

        return back();
    }
}
