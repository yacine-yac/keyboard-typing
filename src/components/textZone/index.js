import './textZone.css'; 
import {useMemo,useState ,useEffect,  useCallback, memo } from 'react';
import CreateWord from "./CreateWord";  

function Textzone({paragraph,setParagraph,text,textState}){  console.log("reveive",paragraph);
    // const createText=useMemo(()=>{
    //     return  script.split(' ').map((x,key)=>{
    //                 return { 
    //                     word:x,
    //                     wordState:key==0 ? true:false,
    //                     check:null
    //                 }
    //     });
    // },[script]);
    // #1 in this part treat the text that we will release for training  
    //=============================================================================================
    const [wordCounter,setwordCounter]=useState({position:0,state:true}); 
    const [numberSpace,setnumberSpace]=useState(0);
    // const [paragraph,setParagraph]=useState(paragraph);
    // #2  wordCounter attach to the word which will treat in writing in array of words (createText)
    //=============================================================================================
    const reducer=(state,checkingWord)=>{ 
        // code disabled will be move to not_blocked writting function  
        // wordCounter['position']>0   &&
        //     (state[wordCounter['position']-1]={
        //         ...state[wordCounter['position']-1],
        //         check:null,
        //         wordState:false
        //     })
        state[wordCounter['position']]={
            ...state[wordCounter['position']],
            check:checkingWord,
            wordState:true
        };  
        return state;
    };
    const checkspace= ()=>{  
        if(text==" "){
             setnumberSpace(numberSpace+1);
             setwordCounter(prev=>{ 
                  return {position:wordCounter["position"]+1,state:true}
             });   
        }else{
          text !==null &&  textState(null); 
        }
    };
    useMemo(()=>{   
              
              (text !==null) && (wordCounter['state']==false ? checkspace(): setParagraph(prev=>reducer(prev,text))); 
              
    },[text,paragraph]);
    useEffect(()=>{   
          text==" " && textState(null); 
    },[wordCounter]); 
    const blockword=useCallback(()=>{ 
               textState(null); 
        return setwordCounter(prev=>{return {...prev,state:false} },[]); 
    },[paragraph])
    return  <>
            <div className="zone">
                {   console.log('zone',paragraph)}
             
                {
            paragraph ==null ?  
                <h2>Please Insseert Text Before</h2> 
            :
                 paragraph.map((x,c)=>{ 
                    return <> 
                         <CreateWord checkPosition={blockword} input={x.check} wordState={x.wordState}  key={c} word={x.word} /> 
                         {  c!==paragraph.length  && " "}
                    </> 
                })}   
            </div>
    </>
}
export default  memo(Textzone);