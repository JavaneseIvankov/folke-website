<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddCartItemRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
   public function index()
   {
      return Inertia::render('cart');
   }

   public function create(AddCartItemRequest $request)
   {
      $request->validate();
      $user = $request->user();

      $user->cart()->create([
         'product_id' => $request->product_id,
         'variant_id' => $request->variant_id,
         'quantity' => $request->quantity,
      ]);

      return redirect()->route('cart')->with('success', 'Item added to cart.');
   }

   public function update(AddCartItemRequest $request)
   {
      $request->validate();
      $user = $request->user();

      $user->cart()->where('product_id', $request->product_id)->update([
         'variant_id' => $request->variant_id,
         'quantity' => $request->quantity,
      ]);

      return redirect()->route('cart')->with('success', 'Item updated in cart.');
   }

   public function destroy(Request $request)
   {
      $request->validate([
         'product_id' => 'required|integer',
      ]);
      $user = $request->user();

      $user->cart()->where('product_id', $request->product_id)->delete();

      return redirect()->route('cart')->with('success', 'Item removed from cart.');
   }
}
