import {combineReducers} from "redux";

import user from "./user";
import app from './app'
import tag from './tagsView'

const rootReducer = combineReducers({
    user,
    app,
    tag
})
export default rootReducer