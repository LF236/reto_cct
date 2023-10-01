import React, { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskAddForm from '../Task/TaskAddForm';

const CtcNavBarComponent = () => {
    const { state, dispatch } : any = useContext( TaskContext );
    const [ txtFilter, setTxtFilter ] = useState( state.filter );

    const handleOpenModal = () => {
        dispatch( { type: 'openModal', payload: TaskAddForm } );
    }

    const handleInpuChange = ( e: any ) => {
        setTxtFilter( e.target.value );
        dispatch( { type: 'filterChange', payload: e.target.value } );
    }

    return (
        <nav className='navbar navbar-light bg-light justify-content-between'>
            <button className='btn btn-outline-success my-2 my-sm-0' onClick={ handleOpenModal }>Add Task</button>
            <form className='form-inline'>
                <input 
                    className='form-control mr-sm-2' 
                    type='search' 
                    placeholder='Search' 
                    aria-label='Search'
                    value={ txtFilter }
                    onChange={ handleInpuChange }
                />
            </form>
        </nav>
    );
}

export default CtcNavBarComponent;