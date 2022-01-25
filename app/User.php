<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Passport\HasApiTokens;

class User extends \TCG\Voyager\Models\User
{
    use Notifiable, SoftDeletes, HasApiTokens;

    /*** MODEL CUSTOMIZABLE ATTRIBUTES ***/
    
    protected $table = 'users';
    protected $primaryKey = 'id';
    public $incrementing = true;
    // protected $keyType = 'string'; // if the model primaryKey is not integer
    // const CREATED_AT = 'creation_date'; // customization of column names
    // const UPDATED_AT = 'updated_date';

    protected $hidden = ['password', 'remember_token'];
    // protected $visible = ['password', 'remember_token'];
    
 

    /** ELOQUENT MUTATORS **/

    // protected $dateFormat = 'U';
    // protected $dates = ['deleted_at']; // attributes mutated to dates and has instance of Carbon class
    public $timestamps = true;
   
    public function getNameAttribute($value){ // computed accessor - allows to manipulate the return value
        return ucfirst($value);
    }
    public function setNameAttribute($value) {  // mutator - allows and set manipulated value to eloquent model
        $this->attributes['name'] = strtolower($value);
    }
    
    /** ATRIBUTE CASTING - converting attributes to common data types */
    protected $casts = [
        // 'is_admin' => 'boolean',  // is_admin that's stored 0/1 in database will be converted
        // 'options' => 'array', // ex accessing attribute that's stored as JSON will be deserialize as array, while serialize back to JSON when set
        // 'created_at' => 'datetime:Y-m-d H:00', // customize the serialization format of individual Eloquent date attributes
    ];

    /* model connection */
    protected $connection = 'mysql';

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
    
    public function carts() 
    {
        return $this->hasMany(Cart::class);
    }
}