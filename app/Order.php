<?php
namespace App;

use Jenssegers\Mongodb\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\SoftDeletes; 

class Order extends Model
{
    use SoftDeletes;
    
    protected $dates = ['deleted_at'];
    protected $collection = 'Order'; // table for mongo
    protected $primaryKey = 'id'; // instead, 'id' property will substitute for mongo _id in query actions, mongo uses _id as default

    protected $fillable = [
        'product_id', 'user_id', 'quantity', 'address' 
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

}