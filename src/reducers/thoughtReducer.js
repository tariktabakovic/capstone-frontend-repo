import uuid from 'uuid';
import {GET_THOUGHTS, ADD_THOUGHT, DELETE_THOUGHT, THOUGHTS_LOADING} from '../actions/types';

const initialState= {
    thoughts: [],
    loading: false
}

export default function(state= initialState, action){
    switch(action.type){
        case GET_THOUGHTS:
            return {
                ...state,
                thoughts: action.payload,
                loading: false
        };
        case DELETE_THOUGHT:
            return {
                ...state,
                thoughts: state.thoughts.filter(thought => thought.id !== action.payload)
            };
        case ADD_THOUGHT:
            return{
                ...state,
                thoughts: [action.payload, ...state.thoughts]
            };
            case THOUGHTS_LOADING:
                return{
                    ...state,
                    loading: true
                }
        default:
            return state;
    }
}