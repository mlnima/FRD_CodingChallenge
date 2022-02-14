import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from './rootReducer';
const middleware = [thunk];

export const store = createStore(reducer, compose(applyMiddleware(...middleware)));

