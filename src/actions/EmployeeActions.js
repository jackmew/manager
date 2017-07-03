import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_DELETE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        // prop: name, phone, shift
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    // console.log(name, phone, shift);

    const { currentUser } = firebase.auth();
    // get access to firebase database
    // /users/userId/employees/ :  a path to our json store 
    // userId: current login user ID
    // firebase.database.ref('/users/userId/employees');
    
    // lie to thunk
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.employeeList({ type: 'reset' });
            }); // remove the back button
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            // on value change event, 只要資料有變, 就會執行 ;, a snapshot: describe what the data in it.
            .on('value', snapshot => {
                console.log(snapshot.val());
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
            // .once('value').then(snapshot => {
            //     console.log(snapshot.val());
            //     dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            // });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                Actions.employeeList({ type: 'reset' }); // remove the back button
            });
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    // no need dispatch, cuz on('value')
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
                Actions.employeeList({ type: 'reset' });
            });
    };
};
