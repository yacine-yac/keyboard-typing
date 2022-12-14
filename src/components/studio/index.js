import Keyboard from '../keyboard';
import TextZone from "../textZone";
import TextInterval from "../interval";
import TextInput from '../TextInput';
import { useLocation,Link} from 'react-router-dom';
import {   useState,memo } from 'react';
import Settingszone from '../settings';  
function Studio(){  
    const {pathname}=useLocation(); 
    const [zoneInput,setZoneInput]=useState(false);  
    const [box,setBox]=useState(false);
    //====================================================================
    const handleInputBox=()=>{ 
        if(pathname==="/text"  &&  box===true) {  setBox(prev=>!prev); setZoneInput(prev=>!prev);}
        else{setZoneInput(prev=>!prev);}
    }
    //====================================================================
    const renderSwitch=()=>{
        switch (pathname){ 
        case "/text": return <TextZone /> ;
        case "/interval" : return   <TextInterval /> ;
        default: return <div>error loading</div>}}
    //=====================================================================
    const handleSettings=()=>{  
            zoneInput  && setZoneInput(prev=>!prev);
            setBox(!box);  
        }; 
    //===========================================================================
    return <> 
    <div id="demo1" className="demo1 center-v"> 
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
               <button type='button' onClick={handleInputBox}  className='button'></button>
               <button type='button' onClick={handleSettings}  className='button button-p active-button'  ></button>
               {box  &&  (<Settingszone/>)} 
               {(zoneInput && (<TextInput closedBox={setZoneInput} />))}
              
          </div> 
         
   </div>
    
    </>
}
export default memo(Studio);