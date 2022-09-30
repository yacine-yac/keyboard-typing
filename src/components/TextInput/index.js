import './index.css';
import React,{memo,useCallback,useEffect, useMemo, useState} from "react";

function TextInput({paragraph,setText,closedBox}){
    const ref=React.createRef();  
    const createText=()=> ref.current.value.split(' ').map((x,key)=>{ 
        return { 
            word:x,
            wordState:key==0 ? true:false,
            check:null
        }
    })  ;
    const handler=useCallback(()=>{  
        if(ref.current.value !=""){  let rf= createText();console.log('ggg',rf)
            setText( rf);
            closedBox(false);
        }
    },[]); 
    useEffect(()=>{

        paragraph !==null && 
        //( ,ref.current.value = paragraph.map( x=>x.word+" ")) 
            
            //paragraph.toString(r=>r.word)
           
        (ref.current.value =paragraph.reduce((previous, current) => {
             return  previous!=="" ? `${previous} ${current.word}` : current.word
        },"")); 
           
    },[paragraph]);
    return <>
         <div className="layer-up area-input block-center">
              <div  className="inp-text ">
                <textarea ref={ref}  placeholder='Insert your text'></textarea>
                <button onClick={handler} className='buttons-ok'>Insert</button>
              </div>
         </div>
    </>
}
export default memo(TextInput);