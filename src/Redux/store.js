import { createStore, combineReducers } from "redux";

import blog_reducer from "./BlogCreate/reducer"
import auth_reducer from './Auth/reducer'

const rootReducer = combineReducers({
    blogs: blog_reducer,
    auth: auth_reducer
})


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;