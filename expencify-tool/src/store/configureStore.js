import {createStore , combineReducers} from 'redux';
import expenceReducer from '../reducers/expences';
import filterReducer from '../reducers/filters' 

export default () => {
    const store = createStore(
        combineReducers({
            expences: expenceReducer,
            filters :filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

        return store;   
}


