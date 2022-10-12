import { legacy_createStore as createStore,applyMiddleware } from "redux";
import {createLogger} from "redux-logger";
import { allReducers } from "./root";


export const store=createStore(allReducers );