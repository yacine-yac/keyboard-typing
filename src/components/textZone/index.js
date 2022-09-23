import './textZone.css'; 
import {useMemo,useState ,useEffect,useReducer, useCallback } from 'react';
import CreateWord from "./CreateWord"; 

function Textzone({text}){  
    const textinput= "the selfstudy lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts ";
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
    const [word_number,setWord_number]=useState(0);

    // #2  word_number attach to the word which will treat in writing in array of words (createText)
    //=============================================================================================
    const reducer=(state,checkingWord)=>{  
        word_number>0   &&
            (state[word_number-1]={
                ...state[word_number-1],check:null,
                wordState:false
            })
        state[word_number]={
            ...state[word_number],
            check:checkingWord,
            wordState:true
        };  
        return state;
    };
    let [paragraph,setpara]=useReducer(reducer,createText);
    const Handleword=()=>{
      // set word_number here  
    //   setWord_number(prev=>prev+1);
     
      setpara(text);
    } 
    useMemo(()=>{
       text !==null &&  Handleword() 
    },[text]);
    
    const increamentWord=useCallback(()=>{console.log('from increamentWord'); return setWord_number(prev=>prev+1);},[]); 
    
    return  <>
            <div className="zone">
                {paragraph.map((x,c)=>{
                    return <CreateWord checkPosition={increamentWord} input={x.check} wordState={x.wordState}  key={c} word={x.word} />  
                })}   
            </div>
    </>
}
export default  Textzone;