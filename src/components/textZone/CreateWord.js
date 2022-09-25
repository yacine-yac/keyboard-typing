import CreateLetter from './CreateLetter'; 
import {  memo,useState,useEffect  } from 'react'; 
const CreateWord=({word,wordState,input,checkPosition})=>{    
    let map_word=word.split('').map((x)=>{
          return  {
                    letter:x,
                    letterState:false
                  }
    });
    let [letterCounter,setletterCounter]=useState(0);
    let [checkWord,setcheckWord]=useState(map_word); 
      
    const checkingLetter=()=>{   
          if(input[input.length-1]==checkWord[letterCounter]["letter"]){
            setcheckWord(prev=>{ 
             prev[letterCounter]={
              ...prev[letterCounter],
              letterState:true
            }
             return prev;
            });
            setletterCounter(prev=>  prev+1  ); 
              letterCounter==(map_word.length-1) && checkPosition(); 
          }else{
              input.length <letterCounter && 
                ( 
                  setcheckWord(prev=>{
                        prev[input.length]={
                                    ...prev[input.length],
                                    letterState:false
                        }
                        return prev;
                  }) 
                );
            
          }
    }
    useEffect(()=>{  
         input !== null &&  checkingLetter();
    },[input]) 
    return <>   
    <span className={wordState==false ? 'n-active' :"span-active"}>{checkWord.map(( x,c )=>{
        return  <CreateLetter key={c} x={x.letter} letterState={x.letterState} />
      })
    }</span></>; 
};
export default memo(CreateWord);