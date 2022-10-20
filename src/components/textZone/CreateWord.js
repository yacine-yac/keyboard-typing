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
    const classname= (wordState==true) ?  "span-active":'n-active';
  //===========================================================================================  
    // console.log('ggggggg');
    useEffect(()=>{   console.log("check",checkWord,"input=",input,">>>>",letterCounter);
         input != null ? 
         ( 
          (letterCounter==input.length-1)
            ?( 
                input[input.length-1]==checkWord[letterCounter]["letter"] 
                ? (
                    setcheckWord(prev=>{prev[letterCounter]['letterState']=true; return prev})
                    // ,letterCounter===word.length-1 && (checkPosition(word))
                    ,input.length <=word.length && setletterCounter(prev=>prev+1)
                  )
                :
                       (keyboardDispatch(Akeyboardpop())
                      //  ,setletterCounter(prev=>prev-1)
                       )
            )
            :   
              (letterCounter >  input.length-1) && 
               ( // console.log(checkWord,'<=>',input,input.length-1),
                  setcheckWord(prev=>{ prev[input.length]['letterState']=false; return prev;})
                 ,setletterCounter(input.length)
                //  ,keyboardDispatch(Akeyboardpop())
                //  ,console.log(input,'<after>',letterCounter,input.length-1)
                //  ,(console.log(letterCounter,"==",input.length-1,'gigi',checkWord))
               )   // slice from keyboard store state
          )
          :(
             letterCounter ==1 && 
             (    setcheckWord(prev=>{ prev[letterCounter-1]['letterState']=false; return prev;})
                 ,setletterCounter(0)  
                 //console.log('sima',letterCounter)
             )
           );
            
    },[input]);
  //  input !==null && console.log('after',letterCounter,input.length-1 ,'inp',input)  //(input ==null && wordState==false) ?'n-active' : "span-active"
    //===========================================================================================
    return <>   
    <span className={classname}>
        { checkWord.map(( x,c )=>{
             return  <CreateLetter key={c} x={x.letter} letterState={x.letterState} />
          })}
    </span></>; 
};
export default memo(CreateWord);