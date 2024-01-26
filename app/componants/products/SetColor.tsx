'use client';
import { setColorProps } from '@/types/type';
import React from 'react'



const SetColor: React.FC<setColorProps> = ({images,
   cartProduct,
   handColorSelect } ) => {
  return (
    <div className='flex gap-4 items-center'>
      <span className='font-semibold'
      >COLOR: </span>
      <div className='flex gap-1'>
      {images.map((image) => {
        return (
          <div key={image.color}
           onClick={() => handColorSelect(image)} 
          className={`h-7 w-7 
          border-teal-300 rounded-full
          flex items-center
          justify-center
          ${cartProduct.selectedImg.color === 
          image.color
          ? 'border-[1.5px]'
        : "border-none" }`}>
          
            <div  style={{background 
              : image.colorCode}} 
              className='
              h-5 w-5 
              rounded-full cursor-pointer
              border-slate-300 border-[1.2px]
              '></div>
              
          </div>
        );
      })}
</div>
    </div>
  )
}

export default SetColor