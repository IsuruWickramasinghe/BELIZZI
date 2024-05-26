import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { useStateContext } from './context/StateContext'
 
function SuccessPayment() {

  const { handleUserPurchaseHistory, user } = useStateContext()

  useEffect(()=>{
    handleUserPurchaseHistory()
  },[user])

  return (
    <div className='success-wrapper'>
      <div className="success">
        <h1>Congratulations! Your payment was successful 
            <i className="ri-shopping-cart-line"></i></h1>
        <span>An email confirmation has been sent to your registered email address. Thank you for your purchase!</span>
      </div>
      <Link to={'/'}><button className="shopping">CONTINUE SHOPPING</button></Link>
    </div>
  )
}

export default SuccessPayment