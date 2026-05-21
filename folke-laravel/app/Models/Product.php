<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
   protected $fillable = [
      'name',
      'description',
      'price',
      'category',
      'image_url'
   ];

   public function images() {
      return $this->hasMany(Product::class);
   }

   public function materials() {
      return $this->hasMany(ProductMaterial::class);
   }
}
