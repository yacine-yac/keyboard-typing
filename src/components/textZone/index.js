import './textZone.css';
import CreateWord from "./CreateWord"; 
function Textzone(){
    const createText=(()=>{
        const text= "The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts "
        return text.split(' ');
    
    })();
    
   
    return  <>
    <div  className="zone">
        {createText.map((x,c)=>{
           return <CreateWord key={c} word={x} />  
        })}   
    </div>
    </>
}
export default Textzone;