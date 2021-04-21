import {ADD_NEW_DADA, SELECT_DATA} from '../actions';

const inialState = ['hello world', 'learn Redux'];

function Data (state = inialState, action) {
    switch(action.type){
        case ADD_NEW_DADA:
            let newState = state;
            newState.push(action.payload);
            state = newState;
            return state;
        case SELECT_DATA:
            return state;
        default:
            return state;
    }
}

export default Data;