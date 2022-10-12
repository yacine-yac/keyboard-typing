import {  Route,Routes } from "react-router-dom"; 
import Studio from "./components/studio";
import "./define.css";
import "./App.css";  
import WaitText from "./components/waitText";  
function App(){     
  return  <>
            <Routes>                                                 
                 <Route path="/"  element={<WaitText  />} />
                 <Route path='/text' element={<Studio />}/>
                 <Route path='/interval' element={<Studio />} />
                 <Route path="*"  element={<WaitText />} />
            </Routes>
  </>
}

export {App };
