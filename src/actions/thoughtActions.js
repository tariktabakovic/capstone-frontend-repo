import {GET_THOUGHTS, ADD_THOUGHT, DELETE_THOUGHT, THOUGHTS_LOADING} from './types';

export const getThoughts = () => {
    return {
        type: GET_THOUGHTS
    }
}

export const deleteThought = (id) => {
    return {
        type: DELETE_THOUGHT,
        payload: id
    }
}

export const addThought = (thought) => {
    return {
        type: ADD_THOUGHT,
        payload: thought
    }
}

export const setThoughtsLoading = () =>{
    return {
        type: THOUGHTS_LOADING
    }
}