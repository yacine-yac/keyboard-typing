import { legacy_createStore as createStore } from "redux"; 
import { allReducers } from "./root";


export const store=createStore(allReducers );