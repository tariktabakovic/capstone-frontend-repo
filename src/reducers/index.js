import {combineReducers} from 'redux';
import thoughtReducer from './thoughtReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    thought: thoughtReducer,
    error: errorReducer,
    auth: authReducer
})