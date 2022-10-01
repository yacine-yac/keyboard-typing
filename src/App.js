import {useState } from "react";
import {Link, Route,Routes, useLocation } from "react-router-dom";
import Keyboard from "./components/keyboard";
import Textzone from './components/textZone'; 
import "./App.css"; 
import TextInput from "./components/TextInput";
import TextInterval from "./components/interval";
import WaitText from "./components/waitText";
function App(){
  const [state,setState]=useState(null); // input text by keyboard     
  const [inputZont,setInputZone]=useState(false); // input text box state
  const {pathname}=useLocation(); 
  let [paragraph,setParagraph]=useState(null); 
   console.log('ggggsss',paragraph,pathname) 
  const root=document.getElementById('root');  //console.log("===",state);
  // root.onclick=()=>{ inputZont==true && setInputZone(false); }; 
  return  <>
   
   <div id="demo1" className="demo1">
         <div className="demo1-area center">
          
          <Routes>
                 <Route path="/"  element={<WaitText  />} />
                 <Route path="/interval"  element={<TextInterval input={state} InputZone={inputZont} setInputZone={setInputZone}/>} />
                 <Route path="/text"  element={<Textzone  paragraph={paragraph} />} />
                 <Route path="*"  element={<WaitText />} />
          </Routes>
          {/* {  
            (paragraph !==null) ? 
              page ==true ?
                    (<Textzone paragraph={paragraph} setParagraph={setParagraph} textState={setState} text={state} />) 
                  :
                    <TextInterval />
            :
               page ==false ?
                    <TextInterval />
                  : 
                    <WaitText setPage={setPage} setInputZone={setInputZone} />
          } */}
        
         </div>
         <div className="demo2"> 
            <Keyboard  status={(inputZont==true || paragraph ==null) ? false: true}  setParagraph={setParagraph} />
         </div> 
   </div>
   <div className='demo1-settings'>
          { pathname !=='/' &&  
              <div className="demo1-title center">
                { pathname==="/interval" ?  <Link to="/text">Insert Text</Link> : <Link to="/interval" >Interval Text</Link>}
              </div> 
          }  
          
          <div className="demo1-buttons block-center center">
              <button onClick={()=>{setInputZone(prev=>{ return prev ? false :true});}} className='button active-button'></button>
              <button className="button"></button>
              {(inputZont==true) && <TextInput paragraph={paragraph} setText={setParagraph} closedBox={setInputZone} />} 
          </div> 
        
   </div>
   
  </>
}

export {App};
