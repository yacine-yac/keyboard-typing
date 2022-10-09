import {  combineReducers } from "redux";
import { textReducer } from "./text";

export const allReducers=combineReducers({words: textReducer});