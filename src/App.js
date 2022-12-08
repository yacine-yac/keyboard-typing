import {  Route,Routes } from "react-router-dom"; 
import Studio from "./components/studio";
 import WaitText from "./components/waitText"; 
import "./App.css";   
import {ThemeProvider}  from  "styled-components"
import { GlobalStyle } from "./style"; 
import { useEffect  } from "react";
import localStorage from 'local-storage'; 
import {useSelector} from "react-redux";
function App(){     
  const  {mode,speed,color} = useSelector(state=>state.setting);  
  useEffect(()=>{ 
    localStorage.get('mode')==null && localStorage.set('mode',mode);
    localStorage.get('speed')==null && localStorage.set('speed',speed);
    localStorage.get('color')==null && localStorage.set('color',color);
  },[]);  
  return  <>
  <ThemeProvider theme={{mode:Boolean(localStorage.get('mode')),colorBar:color.substr(1,color.length-2)}}>
    <GlobalStyle/>
  </ThemeProvider>
            <Routes>                                                 
                 <Route path="/"  element={<WaitText  />} />
                 <Route path='/text' element={<Studio />}/>
                 <Route path='/interval' element={<Studio />} />
                 <Route path="*"  element={<WaitText />} />
            </Routes>
  </>
}

export {App};
