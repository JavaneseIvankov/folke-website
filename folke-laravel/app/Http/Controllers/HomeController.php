<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $products = Product::all();
        $recommendedProducts = Product::orderByDesc('sales_count')->take(3)->get();

        return Inertia::render('welcome', [
            'products' => $products,
            'recommended_products' => $recommendedProducts,
        ]);
    }

    public function dashboard(Request $request)
    {
        $products = Product::latest()->get();
        $orderCount = Order::count();

        return Inertia::render('admin/dashboard', [
            'products' => $products,
            'order_count' => $orderCount,
        ]);
    }
}
