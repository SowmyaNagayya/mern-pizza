import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function Checkout({subTotal}) {
    function tokenHandler(token) {
        console.log(token)
    }
  return (
    <div>
        <StripeCheckout
        // when payment is 200 it shows 2.00 like paisa so * 100 
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        // by default it takes US currency
        currency='INR'
        >
            <button className="btn">Pay Now</button>
        </StripeCheckout>
    </div>
  )
}
