const initialState={mode:localStorage.getItem('mode')==null ? false: localStorage.getItem('mode')
                    ,speed:60}
export const settingReducer=(state=initialState,action)=>{ 
   switch(action.type){
    case 'switch': return {...state, mode:state.mode ==true ? false:true}
    case "manipulate": return {...state,speed:action.payload.speed};
    default : return state;
   }
}