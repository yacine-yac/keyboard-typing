import { useState } from "react";

export default function TextInterval({input,InputZone,setInputZone}){//console.log(input,'input');
    const [state,setstate]=useState(null);  
    InputZone ==true && setInputZone(false);
    const stringRandom=()=>{
         const character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\[\]\^\_\\`\/";
         let position = Math.floor(Math.random(character.length)*10);
         return character.charAt(position);
    }
    // press (shif + E) E is key 69 
    window.onkeydown=(e)=>{ 
        if(e.shiftKey==true && e.keyCode==69){ 
                let letter=stringRandom();
                setstate(letter); 
        }else{
            input==state  ? 
                setstate(stringRandom()) 
            : 
                null
            ;
        }   
    }
     
    return  <>
         <div className="zone center">
            {state ==null ? 
                <h2>Press Ctrl + E</h2>
            : 
                <>
                    <h2> {state} </h2> 
                    <h4></h4>
                </>
            } 
         </div>
    </>
}