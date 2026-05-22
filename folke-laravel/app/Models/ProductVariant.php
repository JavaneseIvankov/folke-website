<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductVariant extends Model
{
    protected $fillable = [
        'name',
        'color',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
