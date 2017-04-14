import * as types from './ActionTypes';
// import {INCREMENT, DECREMENT, SET_COLOR} from './ActionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    }
}

export function decrement() {
    return {
        type: types.DECREMENT
    }
}

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color   // color: color 과 동일한 의미
    };
}