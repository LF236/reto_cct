import taskApi from '../apis/taskApi';
import { GetTaskRequestInterface, SaveTaskFormInterface } from '../interfaces/TaskInterfaces';

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

export const addTask = ( params: SaveTaskFormInterface ) => {
    return new Promise( async ( resolve, reject ) => {
        try {
            const taskAdded = await taskApi.post( '/api/task', { ...params } );
            resolve( taskAdded.data.data );
        }
        catch( err ) {
            reject( 'Error al agregar tarea - Contacté al administrador' );
        }
    } );
}

export const deleteTask = ( id_to_delete: number ) => {
    return new Promise( async ( resolve, reject ) => {
        try {
            await taskApi.delete( `/api/task/${ id_to_delete }` );
            resolve( 'ok' );
        }
        catch( err ) {
            reject( 'Error al eliminar tarea' );
        }
    } );
}

export const likeTask = ( id_to_like: number ) => {
    return new Promise( async ( resolve, reject ) => {
        try {
            await taskApi.put( `/api/task/like/${ id_to_like }` );
            resolve( 'ok' );
        }
        catch( err ) {
            reject( 'Error al eliminar tarea' );
        }
    } );
}