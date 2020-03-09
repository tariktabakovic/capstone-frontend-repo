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