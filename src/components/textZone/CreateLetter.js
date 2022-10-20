import { memo } from "react";

const CreateLetter=({x,letterState})=>{ 
     const classname= letterState ==false ? "n-active":"active";
     return <i  className={classname}>{x}</i>  
   
} 
export default memo(CreateLetter);