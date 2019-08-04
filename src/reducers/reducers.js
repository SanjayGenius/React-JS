import initialState from './initialState';
import * as types from './../actions/types';

export function updateClickCount(state = initialState.clickedCount, action) {
    if (action.type == types.INCREASE_COUNT) {
        return state + 1;
    } else if (action.type == types.DECREASE_COUNT){
        return state - 1;
    }
    return state;
}