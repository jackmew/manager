import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            {/* title: navigator bar title */}
            <Scene key='auth'>
                <Scene key='login' component={LoginForm} title='Please Login' />
            </Scene>
            {/* Scene nesting 唯一的問題是不同的scene不能直接Action.xxx() 到那一頁，只能到parent scene */}
            <Scene key='main'>
                <Scene 
                    key='employeeList' 
                    component={EmployeeList} 
                    title='Employees' 
                    rightTitle='Add'
                    onRight={() => Actions.employeeCreate()}
                    initial
                />
                <Scene key='employeeCreate' component={EmployeeCreate} title='Create Employee' />
                <Scene key='employeeEdit' component={EmployeeEdit} title='Edit Employee' />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
