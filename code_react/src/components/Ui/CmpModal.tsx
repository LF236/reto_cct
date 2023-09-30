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

const CmpModal = () => {
    const { state, dispatch } : any = useContext( TaskContext );

    const closeModal = () => {
        dispatch( { type: 'closeModal', payload: null } );
    }

    return (
        <Modal
            isOpen={ state.openModal }
            onRequestClose={ closeModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className='modal'
            overlayClassName='modal-fondo'
        >
            { state.component && <state.component /> }            
        </Modal>
    );
}

export default CmpModal;