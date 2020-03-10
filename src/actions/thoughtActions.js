import axios from 'axios';
import {GET_THOUGHTS, ADD_THOUGHT, DELETE_THOUGHT, THOUGHTS_LOADING} from './types';

export const getThoughts = () => dispatch => {
    dispatch(setThoughtsLoading());
    axios 
        .get('/api/dailythoughts')
        .then(res=>
            dispatch({
                type: GET_THOUGHTS,
                payload: res.data
                })
            )
}

export const addThought = thought => dispatch => {
    axios
        .post('/api/dailythoughts', thought)
        .then(res =>
            dispatch({
                type: ADD_THOUGHT,
                payload: res.data
            })
        )   
}

export const deleteThought = (id) => {
    return {
        type: DELETE_THOUGHT,
        payload: id
    }
}


export const setThoughtsLoading = () =>{
    return {
        type: THOUGHTS_LOADING
    }
}