export function AthemeSwitch(){
    return {
        type:"switch"
    }
}

export function AsettingManipulation(speed){
    return {
        type:"manipulate",
        payload:{speed}
    }
}