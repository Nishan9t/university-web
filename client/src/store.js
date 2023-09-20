
import {createStore , combineReducers , applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import serviceReducer from './reducers/serviceReducer'
import courseReducer from './reducers/courseReducer';
import contactReducer from './reducers/contactReducer';

let store = createStore(combineReducers({
    serviceReducer:serviceReducer,
    courseReducer : courseReducer,
    contactReducer:contactReducer
 }), applyMiddleware(thunk))

export default store;