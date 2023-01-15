import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import AppNavigator from './src/features/home/components/AppNavigator';
import reducers from './src/reducers';
import middlewareArr from './src/middleware/middleware';
import {  StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const AppContainer = createAppContainer(AppNavigator);

const middleware = middlewareArr();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

console.disableYellowBox = true;

export default function App() {

    return (
        <Provider store={store}>
            <SafeAreaView style={{ backgroundColor: '#141414', flex: 1 }}>
                <StatusBar backgroundColor="#121212" barStyle="light-content" />
                <AppContainer />
            </SafeAreaView>
        </Provider>
    );
}
