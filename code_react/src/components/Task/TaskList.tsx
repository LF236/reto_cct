import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { TaskItemInterface } from '../../interfaces/TaskInterfaces';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { state, dispatch } : any = useContext( TaskContext );

    
    return (
        <div className='row container-task mt-3'>
            <div className='col-sm-12 container-task-list'>
                { state.listTask.map( ( item: TaskItemInterface ) => (
                    <TaskItem key={ item.id } item={ item }/>
                ) ) }
            </div>
        </div>

    );
}

export default TaskList;