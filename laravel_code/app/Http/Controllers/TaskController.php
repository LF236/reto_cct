<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller as BaseController;
class TaskController extends BaseController {
    

    public function getTasks( Request $request ) {
        $query = \App\Models\Task::get();

        return 'ok';
    }


}
