import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {incrAction, decAction} from "../redux/Product/Product.action"
const Product = () => {
    let dispatch = useDispatch()
    let product = useSelector((state)=>{
        return state.product
    })
    // let product ={
    //     name:"Apple i phone",
    //     image:"https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
    //     price:49999,
    //     qty: 1


    //}
   let decHandler =(event)=>{
    console.log("frist")
          dispatch (incrAction)
    }
   let  incrHandler =()=>{
   dispatch(decAction)
    }

  return (
    <div className='container mt-5'>
        <div className='row'>
            <pre>{JSON.stringify(product)}</pre>
            <div className='col-md-6'>
                <table className='table table-hover'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.name}</td>
                            <td><img src={product.image}/></td>
                            <td>{product.price}</td>
                            <td><i className='fa fa-minus-circle' onClick={decHandler}>-</i>{product.qty}<i className='fa fa-plus-circle' onClick={incrHandler}>+</i></td>
                            <td>{product.qty * product.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Product