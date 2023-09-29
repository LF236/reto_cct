export const taskReducer = ( state = {}, action: any ) => {
    switch( action.type ) {
        case 'setAllTask': 
            return {
                ...state,
                listTask: action.payload
            }
        case 'startLoading':
            return {
                ...state,
                isLoading: true
            }
        
        case 'stopLoading':
            return {
                ...state,
                isLoading: false
            }   
        case 'openModal':
            return {
                ...state,
                openModal: true
            }         
        default:
            return state;
    }
}