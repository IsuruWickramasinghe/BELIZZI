import React from 'react';
import axios from 'axios';
import getStripe from '../../lib/getStripe';
import { useStateContext } from '../../context/StateContext';

function Payment({button_name}) {
  
  const { cartItems, user } = useStateContext();

  const handleCheckout = async () => {

    if(!user){

      const stripe = await getStripe();

      try {
        const response = await axios.post('http://localhost:4242/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          cartItems,
          user
        });
  
        if (!response.data || !response.data.id) {
          console.error('Invalid response:', response.data);
          return;
        }
        await stripe.redirectToCheckout({ sessionId: response.data.id });
        
      } catch (error) {
        console.error('Error creating checkout session:', error);
      }
    }
    else{
      // console.log("log into server before payments")
    }

  };



  return (
    <>
        <button className='btn-buy-black cart-btn' onClick={handleCheckout}>{button_name}</button>
    </>
  );
}

export default Payment;