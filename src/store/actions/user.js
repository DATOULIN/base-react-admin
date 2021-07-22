import * as types from "../action-types";
import {setToken} from "../../utils/auth";
import store from "../index";

export const login = (username, password) => {
    return new Promise(((resolve, reject) => {
        if (username && password) {
            let token = 'token'
            store.dispatch(setUserToken(token));
            setToken(token);
            resolve({token, username})
        } else {
            reject({err: 'err'})
        }
    }))
}

export const setUserToken = (token) => {
    return {
        type: types.USER_SET_TOKEN,
        token,
    };
};