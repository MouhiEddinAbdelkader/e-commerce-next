'use client';
import Button from '@/app/componants/Button';
import ProductImage from '@/app/componants/products/ProductImages';
import SetColor from '@/app/componants/products/SetColor';
import SetQuantity from '@/app/componants/products/setQuantity';
import { useCart } from '@/hooks/useCart';
import { productDetailsProps } from '@/types/type'
import { Rating } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { MdCheckCircle } from 'react-icons/md';

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
const {handleAddProductToCart, cartProducts} = useCart()
const [isProductInCart , setIsProductInCart] = useState(false)
const router = useRouter();
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
  console.log(cartProducts)
  const handColorSelect  = useCallback((value : SelectedImgType) => {
    SetCartDetails((prev) => {
      return {...prev, selectedImg : value}
    })
  }, [cartDetails.selectedImg])

  const handleQtyIncrease = useCallback(() => {
    
    SetCartDetails((prev) => {
      return {...prev, quantity: ++prev.quantity};
    });
  }, [cartDetails]);

  const handleQtyDecrease = useCallback(() => {
    SetCartDetails((prev) => {
      return {...prev, quantity: --prev.quantity};
    });
  }, [cartDetails]);
  
  useEffect(() => {
    setIsProductInCart(false)
    if(cartProducts){
      const existingIndex = cartProducts.findIndex((item) => item.id === product.id)

      if(existingIndex > -1) {
        setIsProductInCart(true)
      }
    }
  }, [cartProducts])
 

  return (
    <div className='grid grid-cols-1 
    md:grid-cols-2 gap-12 '>
      <ProductImage cartProduct={cartDetails}
       product={product} 
       handleColorSelect={handColorSelect} />
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
         {isProductInCart 
         ?( <>  <p className='mb-2 text-slate-500 flex items-center gap-1' >
          <MdCheckCircle className='text-teal-400' size={20}/>
          <span>Product Added To Cart</span>
          </p>
          <div className='max-w-[300px]'>
             <Button label="View Cart" outline onClick={() => {
            router.push('/cart');
          } } />
          </div>
         
           </>)
        :  (<> 
        <SetColor
         images={product.images} 
         cartProduct={cartDetails}
         handColorSelect={handColorSelect}
         />
         <Horizontal />
         <SetQuantity 
         cartProduct={cartDetails}
         handleQtyIncrease={handleQtyIncrease}
         handleQtyDecrease={handleQtyDecrease}
         />
         <Horizontal />
         <div className='max-w-[300px]'>
          <Button  
          label='Add To Cart'
          onClick={() => handleAddProductToCart(cartDetails)}
          />
         </div>
         </> )
        }
       
      </div>
    </div>
  )
}

export default ProductDetails