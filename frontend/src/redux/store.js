import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import appReducer from "./app/reducer";
import authReducer from "./auth/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ app: appReducer, auth: authReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
