import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_DELETE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload === { prop: 'name', vlaue: 'jane' }
            // Here: [] is key interpolation
            // const newState = {};
            // newState[action.payload.prop] = action.payload.value;
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            // reset the state
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        case EMPLOYEE_DELETE_SUCCESS:
            return INITIAL_STATE;
        default: 
            return state;
    }
};
