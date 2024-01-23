'use client';
import React from 'react'
import { IconType } from 'react-icons';

 interface buttonProps {
  label: string,
  disabled?: boolean,
  outline?: boolean,
  small?: boolean, 
  custom?:string,
  icon?: IconType,
  onClick : (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<buttonProps> = ({
  label,
  disabled,
  outline,
  small, 
  custom,
  onClick,
  icon : Icon,
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
  : "px-3 py-4 border-2"}
   ${custom ? custom : ''}

    `}
    onClick={onClick}
    >
      {Icon &&  <Icon size={24} />}
          {label}
    </button>
  )
}

export default Button