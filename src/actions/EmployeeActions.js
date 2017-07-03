import {
    EMPLOYEE_UPDATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        // prop: name, phone, shift
        payload: { prop, value }
    };
};
