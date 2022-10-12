export function AtextInsert(words){ 
    return {
        type:"Insert",
        payload:words
    }
}

export function AtextCheck(position,checked,state){
    return {
        type:"check",
        payload:{
            position:position,
            checked:checked,
            wordState:state
        }
    }
}

// export function AtextState(position,wordState){
//     return {
//         type:"wordState",
//         payload:{
//             position:position,
//             wordState:wordState
//         }
//     }
// }
