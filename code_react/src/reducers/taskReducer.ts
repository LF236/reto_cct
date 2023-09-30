import { TaskItemInterface } from "../interfaces/TaskInterfaces"

export const taskReducer = ( state : any = {}, action: any ) => {
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
                openModal: true,
                component: action.payload
            }
        case 'closeModal':
            return {
                ...state,
                openModal: false,
                component: action.payload
            }
        case 'addLike':            
            return {
                ...state,
                listTask: state.listTask.map( ( item: TaskItemInterface ) => {
                    if( item.id === action.payload ) {
                        item.likes += 1;
                        item.isLiked = true;
                    }
                    return item;
                } )
            };
        case 'addTask':
            return {
                ...state,
                listTask: [ action.payload, ...state.listTask ]
            }
        case 'deleteTask':
            return {
                ...state,
                listTask: state.listTask.filter( ( ele: TaskItemInterface ) => ele.id !== action.payload )
            }
        default:
            return state;
    }
}