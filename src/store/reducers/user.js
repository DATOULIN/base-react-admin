import {getToken} from "../../utils/auth";
import * as types from "../action-types";

const initState = {
    username: '',
    token: getToken()
}
export default function user(state = initState, action) {
    switch (action.type) {
        case types.USER_SET_TOKEN:
            return {
                ...state,
                token: action.token
            };
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}

