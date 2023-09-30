import React, { useContext, useEffect, useState } from 'react';
import { SaveTaskFormInterface } from '../../interfaces/TaskInterfaces';
import useForm from '../../hooks/useForm';
import { TaskContext } from '../../context/TaskContext';
import { validateFormAddTask } from '../../helpers/taskHelpers';
import { addTask } from '../../services/taskServices';

const initValuesForm : SaveTaskFormInterface = {
    title: '',
    author: '',
    description: '',
    republic_state: ''
}

export const initValuesFormErrors = {
    title: {
        error: false,
        msg: 'El campo titulo es necesario'
    },
    author: {
        error: false,
        msg: 'El campo autor es necesario'
    },
    description: {
        error: false,
        msg: 'El campo descripción es necesario'
    },
    republic_state: {
        error: false,
        msg: 'El campo estado de la republica es necesario'
    }
}

const TaskAddForm = () => {
    const { state, dispatch } : any = useContext( TaskContext );
    const { values, handleInputChange } = useForm( initValuesForm );
    const [ errors, setErrors ] = useState( initValuesFormErrors );
    const [ globalError, setGlobalError ] = useState( '' );

    const handleSubmit = async ( e: any ) => {
        e.preventDefault();
        setGlobalError( '' );
        setErrors( initValuesFormErrors );
        const { errors_final, isOK } = validateFormAddTask( values );
        if( isOK ) {
            try {
                const task = await addTask( values );
                dispatch( { type: 'addTask', payload: task } );    
                closeModal();                        
            }
            catch( err: string | any ) {
                setGlobalError( err );
            }
        } else {
            setErrors( errors_final );
        }
    }

    const closeModal = () => {
        dispatch( { type: 'closeModal', payload: null } );
    }

    return (
        <>
            <h2 className='h2 font-weight-bold p-2'>Agregar Tarea</h2>            
            <form className='container' onSubmit={ handleSubmit }>
                <div className='form-group mb-2'>
                    <label>Titulo</label>
                    <input
                        onChange={ ( e ) => handleInputChange( e.target.value.toUpperCase(), 'title' ) }
                        value={ values.title }
                        className={ `form-control ${ errors.title.error ? 'is-invalid' : '' }` }
                        id='title'
                    />
                    <div className="invalid-feedback" id='title'>
                        { errors.title.msg }
                    </div>
                </div>

                <div className='form-group mb-2'>
                    <label>Descripción</label>
                    <textarea
                        onChange={ ( e ) => handleInputChange( e.target.value.toUpperCase(), 'description' ) }
                        value={ values.description }
                        className={ `form-control ${ errors.description.error ? 'is-invalid' : '' }` }
                        id='description'
                        rows={3}
                    />
                    <div className="invalid-feedback" id='description'>
                        { errors.description.msg }
                    </div>
                </div>

                <div className='form-group mb-2'>
                    <label>Nombre de autor</label>
                    <input
                        onChange={ ( e ) => handleInputChange( e.target.value.toUpperCase(), 'author' ) }
                        value={ values.author }
                        className={ `form-control ${ errors.author.error ? 'is-invalid' : '' }` }
                        id='author'
                    />
                    <div className="invalid-feedback" id='author'>
                        { errors.author.msg }
                    </div>
                </div>

                <div className='form-group mb-2'>
                    <label>Estado de la republica</label>
                    <input
                        onChange={ ( e ) => handleInputChange( e.target.value.toUpperCase(), 'republic_state' ) }
                        value={ values.republic_state }
                        className={ `form-control ${ errors.republic_state.error ? 'is-invalid' : '' }` }
                        id='republic_state'
                    />
                    <div className="invalid-feedback" id='republic_state'>
                        { errors.republic_state.msg }
                    </div>
                </div>

                <span className='task-global-error h6'>{ globalError }</span>

                <button
                    type='submit'
                    className='btn btn-outline-primary btn-block mt-4'
                >
                    <i className='far fa-save'></i>
                    <span> Guardar</span>
                </button>                     

                <div onClick={ closeModal } className='btn btn-outline-danger btn-block mt-4'>
                    Cancelar
                </div>                
            </form>
        </>
    );
}

export default TaskAddForm;