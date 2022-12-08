const initialState=[];
export const textReducer=(state=initialState,action)=>{  
          switch(action.type){
             case "Insert": return action.payload
             case "check":{    
                state[action.payload.position]['check']=action.payload.checked; 
                state[action.payload.position]['wordState']=action.payload.wordState; 
                return state
             }
            //  case "wordState":{ state[action.payload.position]['WordState']=action.payload.wordState; return state}
             default : return state;
          }
}