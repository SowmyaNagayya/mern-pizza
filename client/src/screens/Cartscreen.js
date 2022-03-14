import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Cartscreen() {
    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems
  return (
    <div>
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h2 style={{fontSize:"40px", fontWeight:"bold"}}>My Cart</h2>
                {cartItems.map(item=> {
                    return <div className="flex-container">
                    <div style={{textAlign:"left"}} className="m-1">
                        <h1>{item.name} [{item.variant}]</h1>
                        <h1>Price: {item.quantity} * {item.prices[0][item.variant]} = {item.price}</h1>
                        <h1 style={{display:'inline'}}>Quantity: </h1>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        <b>{item.quantity}</b>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                        <hr/>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
                })}
                
            </div>

            <div className="col-md-4">
                d
            </div>
        </div>
    </div>
  )
}

export default Cartscreen