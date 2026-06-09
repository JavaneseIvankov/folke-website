<?php

namespace App\Http\Controllers;

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

    public function dashboard()
    {
        $products = Product::latest()->get();

        return Inertia::render('dashboard', [
            'products' => $products,
        ]);
    }
}
