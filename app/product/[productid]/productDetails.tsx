'use client';
import Cart from '@/app/cart/page';
import SetColor from '@/app/componants/products/SetColor';
import SetQuantity from '@/app/componants/products/setQuantity';
import { productDetailsProps } from '@/types/type'
import { Rating } from '@mui/material';
import React, { useCallback, useState } from 'react'

const Horizontal = () => {
  return <h2 className='w-[30%] my-2' />
}

export type CartProductType = {
  id: string,
  name: string,
  description: string,
  category: string, 
  brand: string
  selectedImg: SelectedImgType,
  quantity: number,
  price: number

}
export type SelectedImgType = {
  color: string,
  colorCode: string,
  images: string
}

const ProductDetails: React.FC<productDetailsProps> = ({product}) => {
  const [cartDetails, SetCartDetails] =
   useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category, 
    brand: product.brand,
    selectedImg: {...product.images[0]},
    quantity: 1,
    price: product.price
  })
  const handColorSelect  = useCallback((value : SelectedImgType) => {
    SetCartDetails((prev) => {
      return {...prev, selectedImg : value}
    })
  }, [cartDetails.selectedImg])


  const handleQtyDeacrease = useCallback(() => {
    SetCartDetails((prev) => {
      return {...prev, quantity: --prev.quantity};
    });
  }, [cartDetails]);
  
  const handleQtyIncrease = useCallback(() => {
  if (cartDetails.quantity === 1) {
    return;
  }
  SetCartDetails((prev) => {
    return {...prev, quantity: ++prev.quantity};
  });
}, [cartDetails]);

 

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
        <div className={product.inStock 
        ? 'text-teal-400' : 'test-rose-400'}>
        {product.inStock  
         ?'in Stock' 
         : "out of Stock"} </div>

         <Horizontal />
        <SetColor
         images={product.images} 
         cartproduct={cartDetails}
         handColorSelect={handColorSelect}
         />
         <Horizontal />
         <SetQuantity 
         cartProduct={cartDetails}
         handleQtyIncrease={handleQtyIncrease}
         handleQtyDeacrease={handleQtyDeacrease}
         />
         <Horizontal />
         <div>Add To Cart</div>
      </div>
    </div>
  )
}

export default ProductDetails