import {useState } from "react";
import Keyboard from "./components/keyboard";
import Textzone from './components/textZone';
import "./App.css"; 
function App(){
  const [state,setState]=useState(null); 
  return  <>
   <div className="demo1">
     
      <Textzone text={state} />
   </div>
   <div className="demo2">
      <Keyboard  textState={setState} />
   </div> 
  </>
}

export {App};
