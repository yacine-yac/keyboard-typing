const {mode=false,color="#ebef15",speed=60}=localStorage;
const initialState={
   mode: Boolean(mode),
   speed:Number(speed),
   color: color  
}
export const settingReducer=(state=initialState,action)=>{   
   switch(action.type){
    case 'switch':return {...state, mode:state.mode ==true ? false:true} 
    case "manipulate": return {...state,speed:action.payload.speed};
    case "changeColor": return {...state,color:action.payload.color};
    default : return state;
   }
}