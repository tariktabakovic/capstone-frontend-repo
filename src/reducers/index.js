import {combineReducers} from 'redux';
import thoughtReducer from './thoughtReducer';

export default combineReducers({
    thought: thoughtReducer
})