import React from 'react'

interface MenuItemProps {
    children : React.ReactNode;
    onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({children, onClick}) => {
  return (
    <div 
    className='py-3 
    px-4 hover:bg-neutral-100
     transition'
    onClick={onClick}>
        {children}
    </div>
  )
}

export default MenuItem