const initialState={value:"",shift:false};

export const KeyboardReducer=(state=initialState,action)=>{ 
    switch(action.type){
        case "add": return{ 
                              ...state,
                              value:state.value+action.payload.value
                            //   shift:action.payload.shift
                            };
        case "pop":{  return {...state,value: state.value.slice(0,-1)} };
        case "back": { return{...state, value: state.value.slice(0,-1) }};
        case "switch": return {value:"",shift:!state.shift};
        case 'clear': return {...state,value:""}
        default : return state;
    }
}