'use client';
import Link from 'next/link';
import React, { useCallback, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';
import MenuItem from './MenuItem';
import { signOut } from 'next-auth/react';
import BackDrop from './BackDrop';
import { SafeUser } from '@/types';


interface UserMenuProps {
    currentUser : SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({currentUser}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [])
  return (
    <>
    <div className='relative z-30'>
        <div onClick={toggleOpen} 
        className='flex 
        p-2
        flex-row 
        rounded-full
        border-[1px]
        border-slate-500
        hover:shadow-md
        transition
        gap-1
        curser-pointer
        items-center'>

            <RxAvatar />
            <AiFillCaretDown />
        </div>
        {isOpen && (
            <div className='
            absolute
            shadow-md
            w-[170px]
            bg-white
            overflow-hidden
            right-0
            top-12  text-sm
            flex
            flex-col
            cursor-pointer

            '>
                {currentUser 
                ? <div>
                <Link href="/orders">
                    <MenuItem onClick={toggleOpen}>
                        your Orders
                    </MenuItem>
                </Link>
                <Link href="/admin">
                    <MenuItem onClick={toggleOpen}>
                        Admin
                    </MenuItem>
                </Link>
                <MenuItem onClick={() => {
                    toggleOpen;
                    signOut();
                }}>
                        Log Out
                    </MenuItem>
            </div>

            :  <div>
            <Link href="/login">
                <MenuItem onClick={toggleOpen}>
                    Log In
                </MenuItem>
            </Link>
            <Link href="/register">
                <MenuItem onClick={toggleOpen}>
                    Register
                </MenuItem>
            </Link>
        </div>
            }
                
               
            </div>
        )}
    </div>
    {
        isOpen 
        ? <BackDrop onClick={toggleOpen} />
        : null 
    }
    </>
  )
} 

export default UserMenu
 