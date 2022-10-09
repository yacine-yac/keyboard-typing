import Keyboard from '../keyboard';
import TextZone from "../textZone";
import TextInterval from "../interval";
import TextInput from '../TextInput';
import { useLocation,Link} from 'react-router-dom';
import { useState } from 'react';
function Studio(){
    const {pathname}=useLocation(); 
    const [zoneInput,setZoneInput]=useState(false); 
    //====================================================================
    const handleInputBox=()=>{
         pathname=="/text" &&  setZoneInput(prev=> !prev)
     }
    //====================================================================
    const renderSwitch=()=>{
        switch (pathname){ 
        case "/text": return <TextZone /> ;
        case "/interval" : return   <TextInterval /> ;
        default: return <div>error loading</div>}}
    return <>
    <div id="demo1" className="demo1">
            <div className="demo2">
             { renderSwitch()}
                 
            </div> 
            <Keyboard status={!zoneInput} />
    </div>
    <div className='demo1-settings'>
          { pathname !=='/' &&  
              <div className="demo1-title center">
                { pathname==="/interval" ?  <Link to="/text">Insert Text</Link> : <Link to="/interval" >Interval Text</Link>}
              </div> 
          }  
          
          <div className="demo1-buttons block-center center">
              <button onClick={handleInputBox}  className='button active-button'></button>
              <button   className="button"></button>
              {(zoneInput==true) && <TextInput closedBox={setZoneInput} />} 
          </div> 
        
   </div>
    
    </>
}
export default Studio;