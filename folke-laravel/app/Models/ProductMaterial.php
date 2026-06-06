<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductMaterial extends Model
{
   protected $fillable = [
      'product_id',
      'material',
      'percentage'
   ];

   public function product() {
      return $this->belongsTo(Product::class);
   }
}
