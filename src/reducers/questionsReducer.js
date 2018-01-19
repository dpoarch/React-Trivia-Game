import {
    GET_ALL_DATA, GET_FIRST_DATA, GET_I, GET_SCORE, PLAY_AGAIN
} from "../actions/types";

const INITIAL_STATE = {
    data: [],
    i: 0,
    array: [],
    score: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_FIRST_DATA:
            return { ...state, data: action.payload }
        case GET_I:
            return { ...state, i: action.payload }
        case GET_SCORE:
            return { ...state, score: action.payload }
        case PLAY_AGAIN:
            return { ...state, data: [], i: 0, array: [], score: 0 }
        default:
            return state;
    }
};
