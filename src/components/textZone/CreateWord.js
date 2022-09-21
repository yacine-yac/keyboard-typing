import CreateLetter from './CreateLetter'; 
const CreateWord=({word})=>{
    let map_word=word.split('');
    return <> <span  className=""> 
    {  
     map_word.map(( i,c )=>{
        return  <CreateLetter key={c} x={i}/>
      })
    } </span>  </>; 
};
export default CreateWord;