import CreateLetter from './CreateLetter'; 
import {  memo,useState,useEffect, useMemo  } from 'react';  
import { useDispatch } from 'react-redux';
import {Akeyboardpop} from "../../store/keyboard/actionsKeyboard";
//  ,checkPosition
const CreateWord=({word,wordState,input})=>{  
    const map_word=useMemo(()=>{  
      return word.split('').map((x)=>{
          return  {
                    letter:x,
                    letterState:false
                  }
      });
   },[word]);
    const keyboardDispatch=useDispatch();
    const [letterCounter,setletterCounter]=useState(0);
    const [checkWord,setcheckWord]=useState(map_word);
    const classname=  wordState  ?  "span-active":'n-active';
  //===========================================================================================   
  /* eslint-disable */  
  useEffect(()=>{  
        if(input != null){
          if(letterCounter===input.length-1){
                if(input[input.length-1]===checkWord[letterCounter]["letter"]){ 
                    setcheckWord(prev=>{prev[letterCounter]['letterState']=true; return prev}); 
                    input.length <=word.length && setletterCounter(prev=>prev+1);
                }else{
                    keyboardDispatch(Akeyboardpop()) 
                }
            }else{
                if(letterCounter >  input.length-1){
                  setcheckWord(prev=>{ prev[input.length]['letterState']=false; return prev;})
                  setletterCounter(input.length) 
                }
            }
          }else{
              if(letterCounter ===1){
                 setcheckWord(prev=>{ prev[letterCounter-1]['letterState']=false; return prev;});
                 setletterCounter(0);  
              }
          }
            
    },[input]); 
  //===========================================================================================
    return <>   
    <span className={classname}>
        { checkWord.map(( x,c )=>{
             return  <CreateLetter key={c} x={x.letter} letterState={x.letterState} />
          })}
    </span></>; 
};
export default memo(CreateWord);