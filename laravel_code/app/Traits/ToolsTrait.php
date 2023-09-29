<?php
namespace App\Traits;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Clinic\Patient;


trait ToolsTrait {
    public function errorResponse( $message = null, $code ) {
		return response()->json( [
			'status'=>'Error',
			'message' => $message,
			'data' => null
		], $code );
	}

    public function successResponse( $data, $code = 200 ) {
		return response()->json([
            'ok' => true,			
			'data' => $data
		], $code);
	}
    
}