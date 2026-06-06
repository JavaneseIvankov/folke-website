<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

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
                'variants' => [
                    ['name' => 'White', 'color' => '#ffffff'],
                    ['name' => 'Black', 'color' => '#000000'],
                    ['name' => 'Navy', 'color' => '#1a237e'],
                ],
                'images' => [
                    ['image_url' => 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80'],
                    ['image_url' => 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&auto=format&fit=crop&q=80'],
                ],
                'materials' => [
                    ['material' => 'Cotton', 'percentage' => 100],
                ],
            ],
            [
                'name' => 'Vintage Jacket',
                'description' => 'A stylish vintage jacket for cool weather.',
                'category' => 'Clothing',
                'price' => 1499000,
                'image_url' => 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80',
                'variants' => [
                    ['name' => 'Brown', 'color' => '#8B4513'],
                    ['name' => 'Olive', 'color' => '#808000'],
                    ['name' => 'Black', 'color' => '#000000'],
                ],
                'images' => [
                    ['image_url' => 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80'],
                    ['image_url' => 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80'],
                ],
                'materials' => [
                    ['material' => 'Wool', 'percentage' => 70],
                    ['material' => 'Polyester', 'percentage' => 30],
                ],
            ],
            [
                'name' => 'Crimson Wool Scarf',
                'description' => 'Warm crimson scarf made from fine wool.',
                'category' => 'Accessories',
                'price' => 299000,
                'image_url' => 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&auto=format&fit=crop&q=80',
                'variants' => [
                    ['name' => 'Crimson', 'color' => '#DC143C'],
                    ['name' => 'Gray', 'color' => '#808080'],
                    ['name' => 'Mustard', 'color' => '#FFDB58'],
                ],
                'images' => [
                    ['image_url' => 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&auto=format&fit=crop&q=80'],
                    ['image_url' => 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&auto=format&fit=crop&q=80'],
                ],
                'materials' => [
                    ['material' => 'Wool', 'percentage' => 100],
                ],
            ],
            [
                'name' => 'Sienna Leather Tote',
                'description' => 'Elegant leather tote in sienna brown.',
                'category' => 'Accessories',
                'price' => 2499000,
                'image_url' => 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop&q=80',
                'variants' => [
                    ['name' => 'Sienna', 'color' => '#A0522D'],
                    ['name' => 'Tan', 'color' => '#D2B48C'],
                    ['name' => 'Black', 'color' => '#000000'],
                ],
                'images' => [
                    ['image_url' => 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop&q=80'],
                    ['image_url' => 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80'],
                ],
                'materials' => [
                    ['material' => 'Leather', 'percentage' => 100],
                ],
            ],
            [
                'name' => 'Ivory Cotton Knit',
                'description' => 'Soft knitwear in classic ivory cotton.',
                'category' => 'Clothing',
                'price' => 599000,
                'image_url' => 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80',
                'variants' => [
                    ['name' => 'Ivory', 'color' => '#FFFFF0'],
                    ['name' => 'Beige', 'color' => '#F5F5DC'],
                    ['name' => 'Sage', 'color' => '#B2AC88'],
                ],
                'images' => [
                    ['image_url' => 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80'],
                    ['image_url' => 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&auto=format&fit=crop&q=80'],
                ],
                'materials' => [
                    ['material' => 'Cotton', 'percentage' => 80],
                    ['material' => 'Polyester', 'percentage' => 20],
                ],
            ],
            [
                'name' => 'Onyx Chelsea Boots',
                'description' => 'Sleek onyx black Chelsea boots.',
                'category' => 'Accessories',
                'price' => 1899000,
                'image_url' => 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&auto=format&fit=crop&q=80',
                'variants' => [
                    ['name' => 'Onyx', 'color' => '#353839'],
                    ['name' => 'Brown', 'color' => '#8B4513'],
                    ['name' => 'Burgundy', 'color' => '#800020'],
                ],
                'images' => [
                    ['image_url' => 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&auto=format&fit=crop&q=80'],
                    ['image_url' => 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=600&auto=format&fit=crop&q=80'],
                ],
                'materials' => [
                    ['material' => 'Leather', 'percentage' => 90],
                    ['material' => 'Rubber', 'percentage' => 10],
                ],
            ],
        ];

        foreach ($products as $productData) {
            $variants = $productData['variants'] ?? [];
            $images = $productData['images'] ?? [];
            $materials = $productData['materials'] ?? [];
            unset($productData['variants'], $productData['images'], $productData['materials']);

            $product = Product::create($productData);

            foreach ($variants as $variant) {
                $product->variants()->create($variant);
            }
            foreach ($images as $image) {
                $product->images()->create($image);
            }
            foreach ($materials as $material) {
                $product->materials()->create($material);
            }
        }
    }
}
