import { initValuesFormErrors } from '../components/Task/TaskAddForm';
import { SaveTaskFormInterface } from '../interfaces/TaskInterfaces';

export const validateFormAddTask = ( values: SaveTaskFormInterface ) => {
    let errors_final = initValuesFormErrors;

    if( values.title.length <= 1 ) {
        errors_final = { ...errors_final, 'title': { ...errors_final.title, error: true } }
    }

    if( values.description.length <= 1 ) {
        errors_final = { ...errors_final, 'description': { ...errors_final.description, error: true } }
    }

    if( values.author.length <= 1 ) {
        errors_final = { ...errors_final, 'author': { ...errors_final.author, error: true } }
    }

    if( values.republic_state.length <= 1 ) {
        errors_final = { ...errors_final, 'republic_state': { ...errors_final.republic_state, error: true } }
    }

    let isOK = true;
    for( const [ key, value ] of Object.entries( errors_final ) ) {
        if( value.error ) {
            isOK = false;
            break;
        }
    }

    return {
        errors_final,
        isOK
    }    
}