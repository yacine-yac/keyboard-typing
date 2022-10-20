import './textZone.css'; 
import { useState  ,  useCallback, memo, useMemo, useEffect } from 'react';
import CreateWord from "./CreateWord";
import { useSelector,useDispatch,shallowEqual } from 'react-redux';
import { AtextCheck } from '../../store/text/actionsText'; 
import {Akeyboardclear} from "../../store/keyboard/actionsKeyboard";
// import {contextParagraph }from "../../App";
function Textzone(){  
    const inputed=useSelector(state=>state.keyboard,shallowEqual); 
    const parah = useSelector(state=>state.words,shallowEqual);
    const [paragraph,setParagraph]=useState(parah)
    const dispatchParagraph=useDispatch();
    const dispatchKeyboard=useDispatch();
    const [wordCounter,setwordCounter]=useState(-1);
    //useState({position:0,state:true}); 
    useEffect(()=>{ 
        console.log('<<<<<<<<<<<<<<<>>');
         (parah.length>0) &&  (setParagraph(parah),setwordCounter(prev=>prev+1));
        //  console.log('new para,',parah);
        //  console.log(parah,"parah",wordCounter );
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
    },[inputed,paragraph])
     //==========================================================================================
    const blockword=useCallback((checked)=>{ 
// console.log('popo',paragraph,wordCounter);
        
      
        //g("availibale",wordCounter,checked,paragraph.length);
        // setParagraph(prev=>{  prev[wordCounter]['check']=checked;
        //     //  prev[wordCounter]['wordState']=false;
        //      return prev;
        // } ); 
        // dispatchParagraph(AtextCheck(wordCounter,checked,false));
        // dispatchKeyboard(Akeyboardclear());
        // console.log("afterav",paragraph,wordCounter);
        
    },[paragraph,wordCounter]); 
    // console.log('gogogog',inputed=="" && "yes mom");checkPosition={blockword}
//================================================================================================
    return  <>
   
    <div className="demo1-area center"> 
            <div className="zone block-bottom center"> 
                {
            paragraph.length<=0 ?  
                <h2>Please Insseert Text Before</h2> 
            :   
                paragraph.map((x,c)=>
                         (<CreateWord key={c}  input={x.check =="" ? null : x.check } wordState={x.wordState}  word={x.word} />)
                            )    
                }  

            </div>
    </div>
   </>
}
export default  memo(Textzone);