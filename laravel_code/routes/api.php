<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group( ['prefix' => 'task'], function () {
    Route::get( '/', 'App\Http\Controllers\TaskController@getTasks' );
    Route::post( '/', 'App\Http\Controllers\TaskController@store' );
    Route::put( '/like/{id}', 'App\Http\Controllers\TaskController@addLike' );
    Route::delete( '/{id}', 'App\Http\Controllers\TaskController@deleteTask' );
});