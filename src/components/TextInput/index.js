import './index.css';
import React,{memo,useCallback,useEffect, useMemo, useState} from "react";
import { useSelector,useDispatch } from 'react-redux'; 
import {AtextInsert} from "../../store/text/actionsText";

function TextInput({closedBox}){ 
    const words =useSelector(state=>{return state.words});
    const dispatchWords=useDispatch();
    const ref=React.createRef(); 
    //===========================================================================================
      
    const createText=()=> ref.current.value.split(/(\s+)/).map((x,key)=>{ 
        return { 
            word:x,
            wordState:key==0 ? true:false,
            check:null
        }
    });
    //===========================================================================================
    const handler=()=>{  
        if(ref.current.value !=""){  
            let rf= createText();console.log('iii',rf);
            dispatchWords(AtextInsert(rf));
            closedBox(false); 
        }
    }; 
    //=====================================================================================
    useEffect(()=>{
        words.length>0 &&  
                        (ref.current.value =words.reduce((previous, current) => {
                            return previous+current.word 
                        },"")); 
    },[words]);
    return <>
         <div className="layer-up area-input block-center">
              <div  className="inp-text ">
                <textarea ref={ref}  placeholder='Insert your text'></textarea>
                <button onClick={handler} className='buttons-ok'>Insert</button> {/*  */}
              </div>
         </div>
    </>
}
export default memo(TextInput);