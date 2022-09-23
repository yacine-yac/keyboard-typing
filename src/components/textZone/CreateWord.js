import CreateLetter from './CreateLetter'; 
import {  memo,useState,useEffect, useMemo } from 'react'; 
const CreateWord=({word,wordState,input,checkPosition})=>{    
    let map_word=word.split('').map((x,index)=>{
          return {
            letter:x,
            letterState:false
          }
    });
    let [letterCounter,setletterCounter]=useState(0);
    let [checkWord,setcheckWord]=useState(map_word); 
      
    const checkingLetter=()=>{ //console.log(checkWord,'<<<<', input);
          if(input[input.length-1]==checkWord[letterCounter]["letter"]){
            setcheckWord(prev=>{
             prev[letterCounter]={
              ...prev[letterCounter],
              letterState:true
            }
             return prev;
            });

          setletterCounter(prev=>prev+1);
          letterCounter==(map_word.length-1) && checkPosition(prev=>prev+1);
           
          }
    }
    useEffect(()=>{  
      //  input !== null &&   console.log(input[input.length-1],"#####",checkWord[letterCounter]["letter"] );
      //  console.log(checkWord);
      input !== null &&  checkingLetter();
    },[input])
    return <> <span  className={wordState==false ? "n-active" :"span-active" } >  
    {  
    
     checkWord.map(( x,c )=>{
        return  <CreateLetter key={c} x={x.letter} letterState={x.letterState} />
      })
    } </span>  </>; 
};
export default memo(CreateWord);