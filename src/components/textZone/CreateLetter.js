import { memo } from "react";

const CreateLetter=({x,letterState})=>{ 
      
     return <i  className={letterState ==false ? "n-active":"active"}>{x}</i>  
   
} 
export default memo(CreateLetter);