// index.js

import { combineReducers,applyMiddleware } from 'redux';
import itemReducer from './itemReducer';
import userReducer from './userReducer';
import {routerReducer} from 'react-router-redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
itemReducer,userReducer
})

export default rootReducer