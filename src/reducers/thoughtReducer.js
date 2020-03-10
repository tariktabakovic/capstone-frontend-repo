import uuid from 'uuid';
import {GET_THOUGHTS, ADD_THOUGHT, DELETE_THOUGHT} from '../actions/types';

const initialState= {
    thoughts: [
        {id: uuid(), name: 'Be nice'},
        {id: uuid(), name: 'Be fun'},
        {id: uuid(), name: 'Be now'},
        {id: uuid(), name: 'Be happy'}
    ]
}

export default function(state= initialState, action){
    switch(action.type){
        case GET_THOUGHTS:
            return {
                ...state
        };
        case DELETE_THOUGHT:
            return {
                ...state,
                thoughts: state.thoughts.filter(thought => thought.id !== action.payload)
            };
        default:
            return state;
    }
}