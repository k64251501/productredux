import {INCR, DECR} from "./Product.action"
let intialState ={
    name:"Apple i phone",
        image:"https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
        price:49999,
        qty: 1

}
let productReducer =(state =intialState, action)=>{
    console.log(action.type)
    switch(action.type){
        case INCR: 
        return {...state, qty:state.qty+1}
        case DECR :
            return {...state, qty: state.qty -1}
            default:
                return state
    }
}
export {productReducer}