// index.js
import { combineReducers} from 'redux';
import itemReducer from './itemReducer';
import userReducer from './userReducer';
import reviewReducer from './reviewReducer';
const rootReducer = combineReducers({
itemReducer,userReducer,reviewReducer
})

export default rootReducer