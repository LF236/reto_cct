import React from 'react';
import { TaskItemInterface } from '../../interfaces/TaskInterfaces';
import { dateFormat } from '../../helpers/dates';

interface Props {
    item: TaskItemInterface;
}


const TaskItem = ( { item } : Props ) => {

    return (
        <div className='card card-item' style={{ minWidth: '18rem', maxWidth: '18rem' }}>
            <span>{ `Likes: ${ item.likes }` }</span>
            <div className='card-body'>
                <h5 className='card-title'>{ item.title }</h5>
                <p className='card-text'>{ item.description }</p>
                <a href='#' className='btn btn-primary'>Like</a>

                <p className='date'>
                    { dateFormat( item.created_at ) }
                </p>
            </div>
        </div>
    );
}

export default TaskItem;