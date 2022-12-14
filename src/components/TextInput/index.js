import './index.css';
import React,{memo ,useEffect , useState} from "react";
import { useSelector,useDispatch } from 'react-redux'; 
import {AtextInsert} from "../../store/text/actionsText";

function TextInput({closedBox}){ 
    const words =useSelector(state=>{return state.words});
    const dispatchWords=useDispatch(); 
    const [input,setInput]=useState(""); 
    const titleclass=input.length >100 ? "title_mistake": "title_normale" ;
    const titletext=input.length >0 ? `You inserted  ${input.length >1? input.length+"/100 charachters"  : "1/100 charachter"}` : "Accept only 100 charachters";
    //===========================================================================================
      
    const createText=()=>input.split(/(\s+)/).map((x,key)=>{ 
        return { 
            word:x,
            wordState:key===0 ? true:false,
            check:null
        }
    }); 
    //===========================================================================================
    const handler=(e)=>{
        e.preventDefault(); 
        if(input.length <101){  
            dispatchWords(AtextInsert(input ==="" ? [] : createText())); 
            closedBox(false);
        } 
    }; 
    //=====================================================================================
    useEffect(()=>{
        words.length>0 &&  
                        (setInput(words.reduce((previous, current) => {
                            return previous+current.word 
                        },""))); 
    },[words]);
    //============================================================================================== */
    const handleCounter=(e)=>{ 
        setInput(e.target.value);
    }
    ///====================================================================================
    return <>
         <div className="layer-up area-input block-center">
              <div  className="inp-text ">
                <h2 className={titleclass}>{titletext}</h2>
                <form onSubmit={handler}>
                    <textarea defaultValue={input}    onChange={ handleCounter }  placeholder='Insert your text'></textarea>
                    <button  className='buttons-ok'>Insert</button> {/*  */}
                </form>
              </div>
         </div>
    </>
}
export default memo(TextInput);