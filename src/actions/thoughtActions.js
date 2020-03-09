import {GET_THOUGHTS, ADD_THOUGHT, DELETE_THOUGHT} from './types';

export const getThoughts = () => {
    return {
        type: GET_THOUGHTS
    }
}