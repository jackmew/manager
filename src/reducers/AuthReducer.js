// 避免打錯字，儘管不存在，還是會可以import進來，只會變成undefined
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

// if state is undefined, initialize state = INITIAL_STATE
const INITIAL_STATE = { 
    email: '', 
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED: 
        // 1.make a new object
        // 2.take all the properties of my existing state and throw into the new object
        // 3.then define the property email, put into the new object
        // 4.Redux will compare whether the state & new state are the same
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            // banana; firefbase: 若是有錯的話，也不會顯示

            // reset -> to initail
            // return { ...state, user: action.payload, error: '', loading: false, email: '', password: '' };
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        default:
            return state; 
    }
};
