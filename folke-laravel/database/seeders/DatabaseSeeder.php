<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => 'test123',
            'email_verified_at' => now(),
            'role' => 'user',
        ]);

        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => 'admin123',
            'email_verified_at' => now(),
            'role' => 'admin',
        ]);

        $this->call(ProductSeeder::class);

        $user = User::where('role', 'user')->first();
        $products = \App\Models\Product::all();

        for ($i = 0; $i < 20; $i++) {
            $selectedProducts = $products->random(rand(1, 3));
            
            $totalAmount = 0;
            $items = [];
            foreach ($selectedProducts as $product) {
                $quantity = rand(1, 3);
                $totalAmount += $product->price * $quantity;
                $items[] = [
                    'product_id' => $product->id,
                    'name' => $product->name,
                    'price' => $product->price,
                    'quantity' => $quantity,
                ];
                
                $product->increment('sales_count', $quantity);
            }

            \App\Models\Order::create([
                'user_id' => $user->id,
                'order_number' => strtoupper(uniqid('ORD-')),
                'item_count' => collect($items)->sum('quantity'),
                'total_amount' => $totalAmount,
                'status' => 'completed',
                'items' => $items,
            ]);
        }
    }
}
