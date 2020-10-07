<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//URL shortener for your api
//make sure put this BELOW ur web routes
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::get('sample', function() {
    return view('sample');
});

Route::get('/{any}', function(){
    return view('landing');
})->where('any', '.*');
