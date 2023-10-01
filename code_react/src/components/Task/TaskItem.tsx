import React, { useContext } from 'react';
import swal from 'sweetalert2';
import { TaskItemInterface } from '../../interfaces/TaskInterfaces';
import { dateFormat } from '../../helpers/dates';
import { TaskContext } from '../../context/TaskContext';
import { deleteTask, likeTask } from '../../services/taskServices';

interface Props {
    item: TaskItemInterface;
}


const TaskItem = ( { item } : Props ) => {
    const { state, dispatch } : any = useContext( TaskContext );
    const handleAddLike = async () => {
        try {
            await likeTask( item.id );
            dispatch( { type: 'addLike', payload: item.id } );
        }
        catch( err: string | any ) {
            swal.fire( 'Error', err, 'error' );
        }
        
    }

    const handleDelete = async () => {
        try {
            await deleteTask( item.id );
            dispatch( { type: 'deleteTask', payload: item.id } );
        }
        catch( err: string | any ) {
            swal.fire( 'Error', err, 'error' );
        }
    }

    return (
        <div className='card card-item' style={{ minWidth: '30rem', maxWidth: '30rem' }}>
            <span>{ `Likes: ${ item.likes }` }</span>
            <div className='card-body'>
                <h5 className='card-title'>{ item.title }</h5>
                <p className='card-text'>{ item.description }</p>

                <div className='card-item-actions'>
                    <button 
                        className='btn btn-primary' 
                        onClick={ handleAddLike } 
                        disabled={ item.isLiked }
                    >
                        Like
                    </button>
                    { item.likes === 0 && 
                        <button 
                            className='btn btn-danger' 
                            onClick={ handleDelete } 
                            disabled={ item.isLiked }
                        >
                            Eliminar
                        </button>
                    }
                </div>
                

                <p className='date'>
                    { dateFormat( item.created_at ) }
                </p>
                
                <p className='author'>
                    <span>Autor:</span> { item.author }
                </p>
                <p className='author'>
                    <span>Estado:</span> { item.republic_state }
                </p>
            </div>
        </div>
    );
}

export default TaskItem;