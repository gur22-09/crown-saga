import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({price})=>{

    const priceForStripe = price * 100;
    const stripeAPIKey = `pk_test_NkeuwFmRyaMGo9RJuK8WPfJC00Tng0s4VT`;

    const onToken = token =>{
       axios({
           url: 'payment',
           method: 'post',
           data: {
               amount: priceForStripe,
               token
           }
       }).then(res => {
           alert('payment Successful');
       }).catch(err => {
           console.error(err);
           alert(`make sure you use the provided credit card`);
       })
    }

    return (
        <StripeCheckout

         label='Pay now'
         name='Crown Clothing Ltd'
         currency='INR'
         billingAddress
         shippingAddress
         image='https://sendeyo.com/up/d/f3eb2117da'
         description={`your total price is ₹${price}`}
         amount={priceForStripe}
         panelLabel='Pay now'
         token={onToken}
         stripeKey={stripeAPIKey}   
        />
    )
}


export default StripeButton;