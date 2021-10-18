import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {addExpence} from './actions/expences';
import getVisibleExcepences from './selectors/expences';
import AppRouter from "./routers/AppRouter"


const store = configureStore();

store.dispatch(addExpence({ description:'Water Bill', amount:5000,createdAt:20 }));
store.dispatch(addExpence({ description:'Rent ', amount:10900,createdAt:20 }));
store.dispatch(addExpence({ description:'Gas Bill', createdAt:100 }));


const state =store.getState();
const visibleExpence =getVisibleExcepences(state.expences , state.filters);
console.log(visibleExpence)


const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx,document.getElementById('root')
);

