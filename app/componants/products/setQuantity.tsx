'use client';
import { setQtyProps } from '@/types/type';
import React from 'react'

const SetQuantity : React.FC<setQtyProps> = ({cartCounter,
     cartProduct, handleQtyIncrease,
     handleQtyDeacrease}) => {
        const btnStyle = 'border-[1.2px] border-slate-300 rounded px-2'
  return (
    <div className='flex gap-8 
    items-center'>
        {cartCounter 
        ? null 
    :  <div className='font-semibold'>
        Quantity: 
    </div>   }
    <div className='flex items-center
    gap-4'>
        <button className={btnStyle}
        onClick={handleQtyDeacrease}
        >-</button>
        <div>{cartProduct.quantity}</div>
        <button className={btnStyle}
        onClick={handleQtyIncrease}
        >+</button>
    </div>

    </div>
  )
}

export default SetQuantity