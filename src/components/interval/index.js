import { useState } from "react";

export default function TextInterval(){
    const [state,setstate]=useState(false);
    window.onkeydown=(e)=>{ 
        if(e.shiftKey==true && e.keyCode==69){ console.log('dffdsfs');
            setstate(prev=> !prev)
        }
             
    }
     
    return  <>
         <div className="zone center">
             {state ==false ? <h2>Press Ctrl + E</h2>: <h2>K</h2> } 
         </div>
    </>
}