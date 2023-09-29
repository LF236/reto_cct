import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

const CtcNavBarComponent = () => {
    const { state, dispatch } : any = useContext( TaskContext );

    const handleOpenModal = () => {
        dispatch( { type: 'openModal' } );
    }

    return (
        <nav className='navbar navbar-light bg-light justify-content-between'>
            <button className='btn btn-outline-success my-2 my-sm-0' onClick={ handleOpenModal }>Add Task</button>
            <form className='form-inline'>
                <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
                {/* <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button> */}
            </form>
        </nav>
    );
}

export default CtcNavBarComponent;