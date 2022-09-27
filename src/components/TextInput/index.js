import './index.css';
import React from "react";

function TextInput({setText,closedBox}){
    const ref=React.createRef();
    const handler=()=>{
        ref.current.value !="" &&  (setText(ref.current.value),closedBox(false));
    }
    return <>
         <div className="layer-up center-v">
              <div  className="inp-text ">
                <textarea ref={ref} placeholder='Insert your text'></textarea>
                <button onClick={handler} className='buttons-ok'>Insert</button>
              </div>
         </div>
    </>
}
export default TextInput;