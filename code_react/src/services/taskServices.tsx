import taskApi from '../apis/taskApi';
import { GetTaskRequestInterface } from '../interfaces/TaskInterfaces';

export const getTask = () : Promise<GetTaskRequestInterface> => {
    return new Promise( async ( resolve, reject ) => {
        try {
            const task = await taskApi.get( '/api/task' );
            resolve( task.data.data );
        }
        catch( err ) {
            reject( [] );
        }
    } )
}