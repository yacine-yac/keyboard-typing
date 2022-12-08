export function AthemeSwitch(){
    return {
        type:"switch"
    }
}

export function AColorChange(color){ 
    return {
        type:"changeColor",
        payload:{color}
    }
}


export function AsettingManipulation(speed){
    return {
        type:"manipulate",
        payload:{speed:speed}
    }
}