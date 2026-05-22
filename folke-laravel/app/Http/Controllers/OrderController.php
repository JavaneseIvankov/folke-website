<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class OrderController extends Controller
{
    public function index(Request $request): Response
    {
        $orders = $request->user()->orders()->latest()->get();

        return Inertia::render('orders', [
            'orders' => $orders,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $user = $request->user();
        $cartItems = $user->cartItems()->with(['product', 'variant'])->get();

        if ($cartItems->isEmpty()) {
            return back();
        }

        $items = $cartItems->map(function (Cart $item) {
            return [
                'product_id' => $item->product_id,
                'name' => $item->product->name,
                'variant' => $item->variant?->name,
                'quantity' => $item->quantity,
                'unit_price' => $item->product->price,
                'total_price' => $item->product->price * $item->quantity,
            ];
        })->toArray();

        $totalAmount = array_sum(array_column($items, 'total_price'));
        $itemCount = array_sum(array_column($items, 'quantity'));

        $user->orders()->create([
            'order_number' => strtoupper(Str::random(10)),
            'item_count' => $itemCount,
            'total_amount' => $totalAmount,
            'status' => 'completed',
            'items' => $items,
        ]);

        $user->cartItems()->delete();

        return redirect()->route('orders.index');
    }
}
