<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        abort_unless($request->user()?->email === 'admin@example.com', 403);

        return Inertia::render('admin/products/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        abort_unless($request->user()?->email === 'admin@example.com', 403);

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:2000'],
            'category' => ['required', 'string', 'max:255'],
            'price' => ['required', 'integer', 'min:0'],
            'image_url' => ['nullable', 'url', 'max:2048'],
            'material' => ['nullable', 'string', 'max:255'],
            'variant_1' => ['nullable', 'string', 'max:255'],
            'variant_2' => ['nullable', 'string', 'max:255'],
            'variant_3' => ['nullable', 'string', 'max:255'],
        ]);

        $product = Product::create([
            'name' => $validated['name'],
            'description' => $validated['description'] ?? '',
            'category' => $validated['category'],
            'price' => $validated['price'],
            'image_url' => $validated['image_url'] ?? 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80',
        ]);

        if (!empty($validated['material'])) {
            $product->materials()->create([
                'material' => $validated['material'],
                'percentage' => 100,
            ]);
        }

        foreach (['variant_1', 'variant_2', 'variant_3'] as $variantKey) {
            if (!empty($validated[$variantKey])) {
                $product->variants()->create([
                    'name' => $validated[$variantKey],
                    'color' => $validated[$variantKey],
                ]);
            }
        }

        return redirect()->route('dashboard')->with('success', 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        $product->load(['images', 'materials', 'variants']);

        return Inertia::render('product-detail', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Product $product)
    {
        abort_unless($request->user()?->email === 'admin@example.com', 403);

        $product->delete();

        return to_route('dashboard')->with('success', 'Product deleted successfully.');
    }
}
