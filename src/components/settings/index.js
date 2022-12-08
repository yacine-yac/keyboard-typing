import { useDispatch,useSelector } from 'react-redux';
import {AthemeSwitch,AsettingManipulation,AColorChange} from "../../store/settings/Asettings";
import './index.css'
import localStorage from 'local-storage'; 
function Settingszone(){   
    const dispatchSetting=useDispatch();
    const {color,speed}=useSelector(state=>({speed: state.setting.speed,color:state.setting.color}));  
//=============================================================================================
    const handleBarColor=(e)=>{ 
            dispatchSetting(AColorChange( e.target.value));
            localStorage.set('color',e.target.value);
    }
    const handleThem=(e)=>{
        dispatchSetting(AthemeSwitch());
        localStorage.set('mode',e.target.checked);
    }
//===============================================================================================
  const handleRange=(e)=>{ 
      dispatchSetting(AsettingManipulation(e.target.value));
     localStorage.set('speed',Number(e.target.value));
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
                        <input type="color" onChange={handleBarColor}  defaultValue={color.replace(/['"]+/g, '')} />
                    </li>
                    <li>
                       <span>Write speed</span> 
                    </li>
                    <li>
                        <input id="range" onChange={handleRange} type="range" max="100" min="0" defaultValue={speed}  ></input>
                    </li>
              </div>
         </div>
    </>
}
export default Settingszone;