import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { TaskContext } from '../../context/TaskContext';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        
    }
};

Modal.setAppElement( '#root' );

const initIncome = {
    nombre: '',
    fecha: '',
    tipo: '',
    price: 0
}

const errorStateInit = {
    nombre: false,
    fecha: false,
    tipo: false,
    price: false
};

const CmpModal = () => {
    const { state, dispatch } : any = useContext( TaskContext );
    // const [ form, setForm ] = useState( initIncome );
    // const [ errors, setErrors ] = useState( errorStateInit );

    // const handleInputChange = ( { target } ) => {
    //     setForm({
    //         ...form,
    //         [ target.name ]: target.value
    //     });
    // }

    // const handleSubmit = ( e ) => {
    //     setErrors( errorStateInit );
    //     e.preventDefault();
    //     if( form.nombre.trim().length <= 2 ) {
    //         setErrors( {
    //             ...errors,
    //             nombre: true
    //         } );
    //         return;

    //     }

    //     if( form.fecha == '' ) {
    //         setErrors( {
    //             ...errors,
    //             fecha: true
    //         } );
    //         return;
    //     }

    //     if( form.tipo == '' ) {
    //         setErrors( {
    //             ...errors,
    //             tipo: true
    //         } );
    //     }

    //     dispatch({
    //         type: 'addEntry',
    //         payload: {
    //             ...form,
    //             estado: 'not_check',
    //             price: parseInt( form.price )
    //         }
    //     })
    //     closeModal();        
    // }

    const closeModal = () => {
        // dispatch({
        //     type: 'closeModal'
        // });
        // setForm( initIncome );
    }

    return (
        <Modal
            isOpen={ true }
            onRequestClose={ closeModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className='modal'
            overlayClassName='modal-fondo'
        >
            {/* <h2 className='h2 font-weight-bold p-2'>Agregar Movimiento</h2>
            <form className='container' onSubmit={ handleSubmit }>
                <div className='form-group mb-2'>
                    <label>Nombre</label>
                    <input
                        onChange={ handleInputChange }
                        value={ form.nombre }
                        className={ `form-control ${ errors.nombre ? 'is-invalid' : '' }` }
                        name='nombre'
                    />
                </div>

                <div className='form-group mb-2'>
                    <label>Precio</label>
                    <input                        
                        onChange={ handleInputChange }
                        value={ form.price }
                        pattern='[0-9]'
                        type='number'
                        className={ `form-control ${ errors.price ? 'is-invalid' : '' }` }         
                        name='price'              
                    />
                </div>

                <div className='form-group mb-2'>
                    <label>Tipo</label>
                    <div className='form-check'>
                        <input className={ `form-check-input ${ errors.tipo ? 'is-invalid' : '' }` } type='radio' name='tipo' id='tipoIngreso' value='income' onChange={ handleInputChange }/>
                        <label className='form-check-label' htmlFor='tipoIngreso'>
                            Ingreso
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className={ `form-check-input ${ errors.tipo ? 'is-invalid' : '' }` } type='radio' name='tipo' id='spent' value='spent' onChange={ handleInputChange }/>
                        <label className='form-check-label' htmlFor='spent'>
                            Gasto
                        </label>
                    </div>
                </div>    

                <div className='form-group mb-2'>
                    <label>Fecha</label>
                    <input
                        onChange={ handleInputChange }
                        value={ form.fecha }
                        min='2022-01-01' 
                        max='2022-12-31'
                        type='date'
                        className={ `form-control ${ errors.fecha ? 'is-invalid' : '' }` }     
                        name='fecha'         
                    />
                </div>         

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
            </form> */}
        </Modal>
    );
}

export default CmpModal;