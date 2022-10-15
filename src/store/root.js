import {  combineReducers } from "redux";
import { textReducer } from "./text";
import {KeyboardReducer} from "./keyboard/index"
import {settingReducer} from "./settings/index";
export const allReducers=combineReducers({words: textReducer,keyboard:KeyboardReducer,setting:settingReducer});