const initialState=[];
export const textReducer=(state=initialState,action)=>{ console.log('rec',state);
          switch(action.type){
             case "Insert": return action.payload
             case "check": return [ ...state.words,state.words[action.payload.position]['check']=action.payload.checked]
             case "wordState": return [...state.words,state.words[action.payload.position]['WordState']=action.payload.wordState]
             default : return state;
          }
}