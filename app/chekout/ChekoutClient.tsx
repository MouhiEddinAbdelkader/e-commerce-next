'use client'
import { useCart } from '@/hooks/useCart';
import React, { useEffect, useState } from 'react'

const CheckoutClient = () => {
    const {cartProducts, paymentIntent, handleSetPaymentIntent} = useCart();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)
    useEffect(() => {
        // create a payment 
        fetch('api/create-payment', {
            7 10
        })
    }, [cartProducts, paymentIntent])
  return (
    <div>

    </div>
  )
}

export default CheckoutClient