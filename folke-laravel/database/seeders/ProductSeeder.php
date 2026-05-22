<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Classic White Tee',
                'description' => 'A timeless white tee for any occasion.',
                'category' => 'Clothing',
                'price' => 249000,
                'image_url' => 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80',
            ],
            [
                'name' => 'Vintage Jacket',
                'description' => 'A stylish vintage jacket for cool weather.',
                'category' => 'Clothing',
                'price' => 1499000,
                'image_url' => 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80',
            ],
            [
                'name' => 'Crimson Wool Scarf',
                'description' => 'Warm crimson scarf made from fine wool.',
                'category' => 'Accessories',
                'price' => 299000,
                'image_url' => 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&auto=format&fit=crop&q=80',
            ],
            [
                'name' => 'Sienna Leather Tote',
                'description' => 'Elegant leather tote in sienna brown.',
                'category' => 'Accessories',
                'price' => 2499000,
                'image_url' => 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop&q=80',
            ],
            [
                'name' => 'Ivory Cotton Knit',
                'description' => 'Soft knitwear in classic ivory cotton.',
                'category' => 'Clothing',
                'price' => 599000,
                'image_url' => 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80',
            ],
            [
                'name' => 'Onyx Chelsea Boots',
                'description' => 'Sleek onyx black Chelsea boots.',
                'category' => 'Accessories',
                'price' => 1899000,
                'image_url' => 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&auto=format&fit=crop&q=80',
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
