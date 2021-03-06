import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Checkout from '../components/Checkout';

function Cartscreen() {
    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems
    // reduce function takes 2 parameters 1st parameter is the intial value of subtotal and 2ndparameter is item goes through loop and initial value of subtotal is "0"
    var subTotal = cartItems.reduce((x, item)=> x+item.price, 0)
    const dispatch = useDispatch()
  return (
    <div>
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h2 style={{fontSize:"40px", fontWeight:"bold"}}>My Cart</h2>
                {cartItems.map(item=> {
                    return <div className="flex-container">
                    <div style={{textAlign:"left"}} className="m-1 w-100">
                        <h1>{item.name} [{item.variant}]</h1>
                        <h1>Price: {item.quantity} * {item.prices[0][item.variant]} = {item.price}</h1>
                        <h1 style={{display:'inline'}}>Quantity: </h1>
                        {/* here pizza is nothing but item */}
                        <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, item.quantity+1, item.variant ))}}></i>
                        <b>{item.quantity}</b>
                        <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, item.quantity-1, item.variant ))}}></i>
                        <hr/>
                    </div>

                    <div className="m-1 w-100">
                        <img src={item.image} style={{ height:'80px', width:'80px' }}  />                      
                    </div>

                    <div className="m-1 w-100">
                       <i className="fa fa-trash mt-4" aria-hidden="true" onClick={() => {dispatch(deleteFromCart(item))}}></i>                        
                    </div>
                </div>
                })}
                
            </div>

            <div className="col-md-4" style={{textAlign: 'right'}}>
                <h2 style={{fontSize:'40px', fontWeight:'bold'}}>SubTotal : {subTotal} /-</h2> 
                <Checkout subTotal={subTotal}/>                
                {/* <button className="btn">CHECK OUT</button> */}
            </div>
        </div>
    </div>
  )
}

export default Cartscreen