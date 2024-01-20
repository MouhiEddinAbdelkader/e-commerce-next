'use client';
import { buttonProps } from '@/types/type';
import React from 'react'

const Button: React.FC<buttonProps> = ({
  label,
  disabled,
  outline,
  small, 
  custom,
  icon : Icon,
  onclick
}) => {
  return (
    <button
    disabled={disabled}
     className={`
    disabled : opacity-70
    rounded-md
    hover:opacity-80
    transition
    w-full border-slate-700
    flex items-center
    justify-center  gap-2
   ${outline ? 'bg-white' : 'bg-slate-700'}
   ${outline ? 'text-slate-700' : 'text-white'}
   ${small ? 'text-sm font-light' 
   : 'text-md font-semibold'}
   ${small ? "py-1 px-2 border-[1px] "
  : "bx-3 by-4 border-2"}
   ${custom ? custom : ''}

    `} >
      {Icon &&  <Icon size={24} />}
          {label}
    </button>
  )
}

export default Button