import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0,
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};

export default function counter(state = initialState, action) {
    /* 인수에 state = initialState 와 같이 값을 주면 아래의 코드와 같은 효과
    if(typeof state === 'undefined') {
        return initialState;
    }
    */

    switch(action.type) {
        case types.INCREMENT:
            // return { number: state.number + 1 };
            return {    // es6스프레드를 사용하여 기존 객체를 복사, 변화한부분만 수정
                ...state, 
                number: state.number + 1,
                dumbObject: { ...state.dumbObject, u: 0}    // 2중
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }
}