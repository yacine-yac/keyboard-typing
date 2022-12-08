import "./index.css"
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {Akeyboardclear} from "../../store/keyboard/actionsKeyboard"
export default function TextInterval(){  
    const [state,setstate]=useState(null);   
    const {keyboard,speed}=useSelector(state=>{
        return{
            keyboard:state.keyboard,
            speed:state.setting.speed, 
        }
    }); 
    const dispatchkeyboard=useDispatch();
    const [classStatus,setclassStatus]=useState(false);
    const speedSlide= (100-speed)*2000/100; 
//===================================================================================================
    const stringRandom=()=>{
         const character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\[\]\^\_\//";
         let position = Math.floor(Math.random()*(character.length));
         return character.charAt(position);
    }
//===================================================================================================
    useEffect(()=>{
        (keyboard.shift===true) 
           ?( 
                (keyboard.value==="")
                ? state===null && setstate(stringRandom())
                :(
                    (state===keyboard.value)
                        ? ( setclassStatus(true)
                            ,setTimeout( ()=>{  
                                     setstate(stringRandom());
                                     dispatchkeyboard(Akeyboardclear())
                                     setclassStatus(false)
                            },speedSlide)
                            )
                        : dispatchkeyboard(Akeyboardclear())
                )      
            )
            : keyboard.value!=="" ? (dispatchkeyboard(Akeyboardclear())) :setstate(null)
    },[keyboard]); 
  
//=======================================================================================================    
    return  <>
         <div className="zone center block-bottom z-letter">
            { state ==null ? 
                <h2>Press Ctrl + Shift to start</h2>
            : 
                <>
                    <h2 className={classStatus ==true? "letter-active":null} >{state} </h2> 
                    <h4>Press (Ctrl + Shift) for Stop</h4>
                 </>
            } 
         </div>
         
    </>
}