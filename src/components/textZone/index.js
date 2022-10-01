import './textZone.css'; 
import {useMemo,useState ,useEffect,  useCallback, memo } from 'react';
import CreateWord from "./CreateWord";  

function Textzone({paragraph}){  console.log('mu',paragraph);
    // ,setParagraph,text,textState 
    // const createText=useMemo(()=>{
    //     return  paragraph.split(' ').map((x,key)=>{
    //                 return { 
    //                     word:x,
    //                     wordState:key==0 ? true:false,
    //                     check:null
    //                 }
    //     });
    // },[paragraph]);
    // #1 in this part treat the text that we will release for training  
    //=============================================================================================
    const [wordCounter,setwordCounter]=useState({position:0,state:true}); 
    // const [numberSpace,setnumberSpace]=useState(0);
    // const [paragraph,setparagraph]=useState(paragraph);
    // #2  wordCounter attach to the word which will treat in writing in array of words (createText)
    //=============================================================================================
    const reducer=(state,checkingWord)=>{ 
        // code disabled will be move to not_blocked writting function  
        // wordCounter['position']>0   &&
        //     (state[wordCounter['position']-1]={
        //         ...state[wordCounter['position']-1],
        //         check:null,
        //         wordState:false
        //     })prev=>reducer(prev,text))
        state[wordCounter['position']]={
            ...state[wordCounter['position']],
            check:checkingWord,
            wordState:true
        };  
        return state;
    };
    // const checkspace= ()=>{  
    //     if(text==" "){
    //          setnumberSpace(numberSpace+1);
    //          setwordCounter(prev=>{ 
    //               return {position:wordCounter["position"]+1,state:true}
    //          });   
    //     }else{
    //       text !==null &&  textState(null); 
    //     }
    // };
    // const [script,setscript]=useState(null);
    // console.log(text,"receive",paragraph);
    //     (text !==null && paragraph!==null) &&  (setscript(prev=>{
    //                                  let obj=prev;
    //                                     obj[wordCounter['position']]={
    //                                             ...obj[wordCounter['position']],
    //                                             check:text,
    //                                             wordState:true
    //                                         };  
    //                                         return obj; 
    // })); 
    // useMemo(()=>{
    //         setscript(paragraph);
    // },[paragraph]);
    // useEffect(()=>{   
              
    //     //    
    //                     // (wordCounter['state']==false ?
    //                     //          checkspace()
    //                     // : 
                        
                                  
                          
              
    // },[text]);
    // useEffect(()=>{   
    //     //   text==" " && textState(null); 
         
    // },[wordCounter]); 
    const blockword=useCallback(()=>{ 
            //    textState(null); 
        return setwordCounter(prev=>{return {...prev,state:false} },[]); 
    },[paragraph])
    return  <>
            <div className="zone"> 
                {
            paragraph ==null ?  
                <h2>Please Insseert Text Before</h2> 
            :   
                paragraph.map((x,c)=>
                         (<CreateWord key={c} checkPosition={blockword} input={x.check} wordState={x.wordState}  word={x.word} />)
                               )    
                }  

            </div>
    </>
}
export default  memo(Textzone);