import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { TaskItemInterface } from '../../interfaces/TaskInterfaces';
import TaskItem from './TaskItem';
import CmpLoader from '../Ui/CmpLoader';

const TaskList = () => {
    const { state, dispatch } : any = useContext( TaskContext );

    
    return (
        <>
            { state.listTask.length > 0 && !state.isLoading &&
                <div className='row container-task mt-3'>
                    <div className='col-sm-12 container-task-list'>
                        { state.listTask.map( ( item: TaskItemInterface ) => (
                            <TaskItem key={ item.id } item={ item }/>
                        ) ) }
                    </div>
                </div>
            }

            { state.listTask.length === 0 && !state.isLoading && 
                <>Sin registros</>
            }


            { state.isLoading && 
                <CmpLoader />
            }
        </>
    );
}

export default TaskList;