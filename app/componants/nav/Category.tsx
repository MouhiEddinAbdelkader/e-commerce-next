'use client'
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react'
import { IconType } from 'react-icons'
interface CategoryProps {
    label: string;
    icon: IconType;
    selected? :boolean
}
const Category: React.FC<CategoryProps> = ({

    label,
    icon:Icon,
    selected
}) => {

    const router = useRouter();
    const params = useSearchParams()
    const handleClick = useCallback(() => {
        if(label === 'all') {
            router.push('/')
        }
    }, []);

  return (
    <div 
    onClick={handleClick}
    className={`
    flex items-center
    justify-center
    hover:text-slate-800
    border-b-2
    gap-1
    p-2
    transition  cursor-pointer
    ${selected 
    ? 'border-b-slate-800 text-slate-800'
   : 'border-transparent text-slate-500 '}
    `}>
        <Icon  size={20}/>
        <div className='font-medium 
        text-md'>
            {label}
        </div>
    </div>
  )
}

export default Category