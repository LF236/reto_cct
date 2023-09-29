<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller as BaseController;
use App\Traits\ToolsTrait;

class TaskController extends BaseController {
    use ToolsTrait;

    public function getTasks( Request $request ) {
        $query = \App\Models\Task::get();
        return response()->json( [            
            'ok' => true,
            'data' => $query
        ],200 );
        return 'ok';
    }

    public function store( Request $request ) {
        $validator = $this->validateForm( $request );
        if( $validator->fails() ){
            return $this->errorResponse($validator->messages(), 422);
        }

        \DB::beginTransaction();
        try {
            $newTask = new \App\Models\Task;
            $newTask->title = $request->title;
            $newTask->description = $request->description;
            $newTask->author = $request->author;
            $newTask->republic_state = $request->republic_state;
            $newTask->likes = 0;
            $newTask->save();

            \DB::commit();
            return response()->json( [            
                'ok' => true,
                'data' => $newTask
            ],200 ); 
        }
        catch( \Exception $e ) {
            \DB::rollback();            
            return response()->json([
                "errors" => [ 'exception' =>[ $e->getMessage() ] ],
                "message" => "Internal error, contact administrator."
            ],500);
        }
    }

    public function addLike( Request $request, $id ) {
        $task = \App\Models\Task::find( $id );
        if( !$task ) {
            return response()->json([                
                "message" => "Task not found"
            ],500);    
        }

        \DB::beginTransaction();
        try {
            $task->likes = $task->likes + 1;
            $task->save();
            \DB::commit();

            return response()->json( [            
                'ok' => true,
                'data' => $task
            ],200 ); 
        }
        catch( \Exception $e ) {
            \DB::rollback();            
            return response()->json([
                "errors" => [ 'exception' =>[ $e->getMessage() ] ],
                "message" => "Internal error, contact administrator."
            ],500);
        }
    }

    public function deleteTask( Request $request, $id ) {
        $task = \App\Models\Task::find( $id );
        if( !$task ) {
            return response()->json([                
                "message" => "Task not found"
            ],500);    
        }

        \DB::beginTransaction();
        try {
            if( $task->likes > 0 ) {
                return response()->json([                
                    "message" => "Task cannot be deleted"
                ],500); 
            }

            $task->delete();            
            \DB::commit();

            return response()->json( [            
                'ok' => true,
                'msg' => 'Task Deleted'                
            ],200 ); 
        }
        catch( \Exception $e ) {
            \DB::rollback();            
            return response()->json([
                "errors" => [ 'exception' =>[ $e->getMessage() ] ],
                "message" => "Internal error, contact administrator."
            ],500);
        }
    }

    private function validateform($request){
        return \Validator::make($request->all(), [
            'title'                   => 'required',
            'description'   => 'required',
            'author'  => 'required',
            'republic_state'          => 'required',
		]);
    }
}
