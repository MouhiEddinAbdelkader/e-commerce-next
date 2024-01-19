'use client';
import { productDetailsProps } from '@/types/type'
import { Rating } from '@mui/material';
import React from 'react'

const Horizontal = () => {
  return <h2 className='w-[30%] my-2' />
}

const ProductDetails: React.FC<productDetailsProps> = ({product}) => {
  return (
    <div className='grid grid-cols-1 
    md:grid-cols-2 gap-12 '>
      <div>image</div>
      <div className='flex flex-col gap-1
      text-slate-500 font-medium'>

        <h2 className='font-medium
        text-3xl text-slate-500' >
          {product.name}
        </h2>
        <div className='flex items-center 
        gap-2'>
          <Rating value={5} /> 
        <div>reviews</div>
        </div>
        <Horizontal />
        <div className='text-justify'
        >{product.description}</div>
        <Horizontal />
        <div>
          <span className='font-semibold'
          >CATEGORY: </span> {product.category}
        </div>
        <div>
          <span className='font-semibold'
          >BRAND: </span> {product.brand}
        </div>
        <div>{product.inStock  
         ?'in Stock' 
         : "out Stock"} </div>
      </div>
    </div>
  )
}

export default ProductDetails