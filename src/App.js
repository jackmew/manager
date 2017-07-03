import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        // firebase initialize
        const config = {
            apiKey: 'AIzaSyAqG31tJwAh_Z6kZlnO-YzmRjsUmet-x30',
            authDomain: 'manager-621e2.firebaseapp.com',
            databaseURL: 'https://manager-621e2.firebaseio.com',
            projectId: 'manager-621e2',
            storageBucket: '',
            messagingSenderId: '902550881416'
        };
        firebase.initializeApp(config);        
    }
    render() {
        // 1.reducers
        // 2.prepopular something
        // 3.store enhancer
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}
export default App;
