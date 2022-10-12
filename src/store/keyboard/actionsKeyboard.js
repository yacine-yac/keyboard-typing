export function Akeyboardadd(value){ 
    return {
        type:"add",
        payload:{value}
    }
}
export function Akeyboardswitch(){ 
    return {
        type:"switch", 
    }
}
export function Akeyboardclear(){
    return {
        type:"clear"
    }
}
export function AkeyboardBack(){
    return {
        type:"back"
    }
}
export function Akeyboardpop(){
    return {
        type:'pop'
    }
}