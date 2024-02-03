'use client'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'
import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import Button from '../componants/Button'
import ItemContent from './ItemContent'
import { formatPrice } from '@/utils/formatPrice'

const CartClient = () => {
    const {cartProducts, 
      handleClearCart,
      cartTotalAmount} = useCart()
    // if(!cartProducts || cartProducts.length === 0) {
    //   return (
    //     <div className='flex flex-col  items-center' >
    //       <div className='text-2xl'>Your Cart Is Empty</div>
    //       <div>
    //         <Link href={"/"} 
    //         className='flex items-center
    //          gap-1 mt-2 '
    //         >
    //         <MdArrowBack size={20} />
    //         <span className='text-slate-500'>Start Shopping</span>
    //         </Link>
    //       </div>
    //     </div>
    //   )
    // }
  return (
    <div>
      <h1 className='text-center text-4xl font-extrabold mb-5'>Shopping Cart</h1>
      <div className='grid grid-cols-5 mt-8
       items-center pb-2 gap-4 text-xs'>

        <div className='
        col-span-2 
        justify-self-start
        ' >PRODUCT</div>
        <div className='justify-self-center'>PRICE</div>
        <div className='justify-self-center'>QUANTITY</div>
        <div className='justify-self-end'>TOTAL</div>
      </div>
      <div>
        {cartProducts && cartProducts.map((item) => {
          return <ItemContent key={item.id} item={item} />
        })}
      </div>
      <div className='flex justify-between'>
        <div  className='w-90px
         border-slate-200 
          '>
          <Button outline small
           onClick={() => handleClearCart()} label="Clear Cart" />
        </div>
        <div className='text-sm flex
        items-start
        flex-col gap-1'>
          
            <div className='flex 
            justify-between
             w-full text-base 
             font-semibold'>
            <span>Subtotal</span>
            <span>{formatPrice(cartTotalAmount)}</span>
            </div>
            <p 
            className='text-slate-500'
            >Taxes and shipping calculate at checkout</p>

            <Button label='Checkout' onClick={() => {}} />
            <Link href={"/"} 
         className='flex items-center
            gap-1 mt-2 '
           >
             <MdArrowBack size={20} />
            <span className='text-slate-500'>Continue Shopping</span>
            </Link>
           
        </div>
        
      </div>
    </div>
  )
}

export default CartClient
