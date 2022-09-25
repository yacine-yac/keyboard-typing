import './textZone.css'; 
import {useMemo,useState ,useEffect,useReducer, useCallback } from 'react';
import CreateWord from "./CreateWord"; 
import SpaceText from './spaceText';

function Textzone({text,textState}){  
    const textinput= "The selfstudy lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts ";
    const createText= (()=>{
        return  textinput.split(' ').map((x,key)=>{
            return { 
                word:x,
                wordState:key==0 ? true:false,
                check:null
            }
        });
    })() ;
    // #1 in this part treat the text that we will release for training  
    //=============================================================================================
    const [wordCounter,setwordCounter]=useState({position:0,state:true}); 
    const [numberSpace,setnumberSpace]=useState(0);
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
    let [paragraph,setpara]=useReducer(reducer,createText);
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
    useMemo(()=>{  console.log(paragraph );
              (text !==null) && (wordCounter['state']==false ? checkspace(): setpara(text)); 
    },[text]);
    useEffect(()=>{   
          text==" " && textState(null); 
    },[wordCounter]); 
    const blockword=useCallback(()=>{ 
               textState(null); 
        return setwordCounter(prev=>{return {...prev,state:false} },[]); 
    },[])
    return  <>
            <div className="zone">
                { paragraph.map((x,c)=>{ 
                    return <> 
                         <CreateWord checkPosition={blockword} input={x.check} wordState={x.wordState}  key={c} word={x.word} /> 
                         {  c!==paragraph.length  && " "}
                    </> 
                })}   
            </div>
    </>
}
export default  Textzone;