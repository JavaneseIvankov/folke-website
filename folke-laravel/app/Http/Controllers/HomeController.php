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

        return Inertia::render('welcome', [
            'products' => $products,
        ]);
    }

    public function dashboard(Request $request)
    {
        $products = Product::latest()->get();
        $orderCount = $request->user()?->email === 'admin@example.com'
            ? Order::count()
            : null;

        return Inertia::render('dashboard', [
            'products' => $products,
            'order_count' => $orderCount,
        ]);
    }
}
