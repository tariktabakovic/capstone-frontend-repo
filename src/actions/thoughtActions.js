import axios from 'axios';
import {GET_THOUGHTS, ADD_THOUGHT, DELETE_THOUGHT, THOUGHTS_LOADING} from './types';
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions';

export const getThoughts = () => dispatch => {
    dispatch(setThoughtsLoading());
    axios 
        .get('/api/dailythoughts')
        .then(res=>
            dispatch({
                type: GET_THOUGHTS,
                payload: res.data
                }))
        .catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addThought = thought => (dispatch, getState) => {
    axios
        .post('/api/dailythoughts', thought, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_THOUGHT,
                payload: res.data
            }))  
        .catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))) 
}

export const deleteThought = id => (dispatch, getState) => {
    axios
        .delete(`/api/dailythoughts/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_THOUGHT,
            payload: id
        }))
    .catch(err => 
        dispatch(returnErrors(err.response.data, err.response.status)))
}


export const setThoughtsLoading = () =>{
    return {
        type: THOUGHTS_LOADING
    }
}