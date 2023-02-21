import {productReducer}  from "./Product/Product.reducer"
import { combineReducers } from 'redux'
let rootReducer = combineReducers ({product: productReducer})
export {rootReducer}