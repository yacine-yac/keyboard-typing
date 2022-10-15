import { getPropertyCss,setPropertyCss } from './CssProperties';
import { useDispatch,useSelector } from 'react-redux';
import {AthemeSwitch,AsettingManipulation} from "../../store/settings/Asettings";
import './index.css'
import localStorage from 'local-storage';
import rgb from 'rgb-hex' 
function Settingszone(){  
    const colorBar="#"+rgb(getPropertyCss('--bar-color'));
    const dispatchSetting=useDispatch();
    const rangeState=useSelector(state=>state.setting.speed);
//=============================================================================================
    const handleBarColor=(e)=>{
            setPropertyCss("--bar-color",e.target.value);
    }
    const handleThem=(e)=>{
        dispatchSetting(AthemeSwitch());
        localStorage.set('mode',e.target.checked);
    }
//===============================================================================================
  const handleRange=(e)=>{ console.log(e.target.value,">>>>");
     dispatchSetting(AsettingManipulation(e.target.value));
  } 
//===============================================================================================
    return <> 
       <div className="layer-up settings  block-center">
              <div className="setting-block center">
               
                    <li>
                        <span>Mode dark</span> 
                        <input onChange={handleThem}  defaultChecked={localStorage.get('mode')} type="checkbox" id="switch" /><label htmlFor="switch">Toggle</label>
                    </li>
                    <li>
                        <span>Check bar</span> 
                        <input type="color" onChange={handleBarColor}   defaultValue={colorBar} />
                    </li>
                    <li>
                       <span> Write speed</span> 
                    </li>
                    <li><label htmlFor="range">value is </label>
                        <input id="range" onChange={handleRange} type="range" max="100" min="0" defaultValue={rangeState}  ></input>
                        
                    </li>
              </div>
         </div>
    </>
}
export default Settingszone;