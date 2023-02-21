const INCR ="INCR"
const DECR = "DECR"
let incrAction= ()=>{
    return {type: INCR}
}
let decAction =()=>{
    return {type: DECR}
}
export {INCR , DECR, incrAction, decAction}