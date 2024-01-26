import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import {Redressed } from 'next/font/google';
import Categories from './Categories';

const redressed = Redressed({ subsets : 
  ['latin'],
  weight : ["400"]})

const NavBar = () => {
  return (
    <div className="styky top-0 w-full
     bg-slate-200 z-30  shodwo-sm">
      
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex items-center 
          justify-between gap-3 md:gap-0 '>
            <Link href={'/'} className={`${redressed
            .className} font-bold`}>E-Shop</Link>
            <div className='hidden md:block'>Search</div>
            <div className='flex items-center 
            gap-8 
            md:gap-12'>
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>

      </div>
      </div>
  )
}

export default NavBar