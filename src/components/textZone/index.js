import './textZone.css'; 
import { useState  , memo, useMemo, useEffect } from 'react';
import CreateWord from "./CreateWord";
import { useSelector,useDispatch,shallowEqual } from 'react-redux';
import { AtextCheck } from '../../store/text/actionsText'; 
import {Akeyboardclear} from "../../store/keyboard/actionsKeyboard"; 
function Textzone(){  
    const inputed=useSelector(state=>state.keyboard,shallowEqual); 
    const parah = useSelector(state=>state.words,shallowEqual); 
    const [paragraph,setParagraph]=useState(parah)
    const dispatchParagraph=useDispatch();
    const dispatchKeyboard=useDispatch();
    const [wordCounter,setwordCounter]=useState(-1); 
    //============================================================================================
    useEffect(()=>{  
         (parah.length>0) &&  (setParagraph(parah),setwordCounter(prev=>prev+1)); 
    },[parah]); 
    useMemo(()=>{  
        (parah.length>0 && wordCounter<paragraph.length) &&  
          (  
            ( (wordCounter!==paragraph.length-1 ) 
               ? setParagraph(prev=>{
                     prev[wordCounter]['check']= inputed.value ;
                     prev[wordCounter]['wordState']=true;
                     return prev;
                    })
               : (paragraph[wordCounter]['check']!== paragraph[wordCounter]['word'] 
                     &&  setParagraph(prev=>{
                        prev[wordCounter]['check']= inputed.value ;
                        prev[wordCounter]['wordState']=true;
                        return prev;
                      }))
            ,(paragraph[wordCounter]['check']==paragraph[wordCounter]['word'] && wordCounter< paragraph.length-1) && 
                 ( 
                    setParagraph(prev=>{  
                         prev[wordCounter]['check']=inputed.value;
                         prev[wordCounter]['wordState']=false;
                         return prev;
                    }),  
                     dispatchParagraph(AtextCheck(wordCounter,inputed.value,true)) 
                    ,dispatchKeyboard(Akeyboardclear()) 
                    ,setwordCounter(prev=>prev+1)
                 )
            ) 
           ) 
    },[inputed,paragraph]);
//================================================================================================
    return  <>
   
    <div className="demo1-area center"> 
            <div className="block-bottom center  zone">
               <section>  
                {
            paragraph.length<=0 ?  
                <h2>Please Insseert Text Before</h2> 
            :   
                paragraph.map((x,c)=>
                         (<CreateWord key={c}  input={x.check =="" ? null : x.check } wordState={x.wordState}  word={x.word} />)
                            )    
                }  
               </section> 
            </div>
    </div>
   </>
}
export default  memo(Textzone);