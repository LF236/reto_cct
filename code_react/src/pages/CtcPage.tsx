import React, { useEffect, useReducer } from 'react';
import CtcNavBarComponent from '../components/Ui/CtcNavBarComponent';
import TaskList from '../components/Task/TaskList';
import { taskReducer } from '../reducers/taskReducer';
import { TaskContext } from '../context/TaskContext';
import { TaskContextInterface } from '../interfaces/TaskInterfaces';
import { getTask } from '../services/taskServices';
import CmpModal from '../components/Ui/CmpModal';

const init = () : TaskContextInterface => {
    return {
        openModal: false,
        listTask: [],
        isLoading: true,
        filter: ''
    }
}

const CtcPage = () => {
    const [ state, dispatch ] = useReducer( taskReducer, {}, init );

    useEffect( () => {
        dispatch( { type: 'startLoading' } );
        getTask( state.filter )
        .then( res => {
            dispatch( {
                type: 'setAllTask',
                payload: res
            } );
        } )
        .catch( err => {
            dispatch( {
                type: 'setAllTask',
                payload: []
            } );
        } )
        .finally( () => {
            dispatch( { type: 'stopLoading' } );
        } );
    }, [ state.filter ] );

    return (
        <TaskContext.Provider value={ { state, dispatch } }>
            <CtcNavBarComponent />
            <TaskList />
            <CmpModal />
        </TaskContext.Provider>
    );
}

export default CtcPage;