'use client'
import { productCardProps } from '@/types/type'
import { formatPrice } from '@/utils/formatPrice'
import { truncateText } from '@/utils/truncateText'
import { Rating } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'


const ProductCard: React.FC<productCardProps> = ({data}) => {
  const route = useRouter();
  return (
    <div onClick={() => route.push(`/product/${data.id}`)} className='col-span-1 
    curser:pointer border-[1.2px] 
    border-slate-200 hover:scale-105
    bg-slate-50 p-2 rounded-sm transition
     text-center text-sm q'>
        <div className='w-full flex flex-col
        items-center gap-1 '>
            <div className='w-full relative
            overflow-hidden aspect-square'>
              <Image 
              fill src={data.images[0].image} 
              alt={data.name} 
              className='w-full h-full 
              object-contain'/>
            </div>
            <div className='mt-4'>{truncateText(data.name)}</div>
            <div> <Rating readOnly value={5} /></div>
            <div>{data.reviews.length} Reviews</div>
            <div className='font-semibold'>{formatPrice(data.price)}</div>

        </div> 
    </div>
  )
}

export default ProductCard