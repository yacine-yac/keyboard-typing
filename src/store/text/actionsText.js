export function AtextInsert(words){ 
    return {
        type:"Insert",
        payload:words
    }
}

export function AtextCheck(position,checked){
    return {
        type:"check",
        payload:{
            position:position,
            checked:checked
        }
    }
}

export function AtextState(position,wordState){
    return {
        type:"wordState",
        payload:{
            position:position,
            wordState:wordState
        }
    }
}
