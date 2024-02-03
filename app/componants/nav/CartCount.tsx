'use client'
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation'
import React from 'react'
import { CiShoppingCart } from 'react-icons/ci';

const CartCount = () => {
    const {cartTotalQty} = useCart();
    const route = useRouter()
  return (
    <div className='relative
     cursor-pointer' 
     onClick={() => {route.push('/cart')}}
     >
      <div className='text-3xl'>
        <CiShoppingCart />
        </div>
        <span 
        className='absolute 
        top-[-10px]
        right-[-10px] 
        text-white
        h-6
        w-6
        rounded-full
        flex
        items-center
        justify-center
        text-sm
        bg-slate-700'>
        {cartTotalQty}
        </span>
    </div>
  )
}

export default CartCount