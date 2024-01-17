import React from 'react'
import Container from '../Container'
import FooterList from './FooterList'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='bg-slate-700
     text-slate-200 mt-16 text-sm'>
      <Container>
        <div className='flex flex-col 
        md:flex-row pt-16 pb-8'>
          <FooterList>
            <h3 className='mb-2 font-bold'>Shop Catergories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
          </FooterList>
          <FooterList>
            <h3 className='mb-2 font-bold'>Shop Catergories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
          </FooterList>
          <div className='md:mb-0  w-full 
          md:w-1/3 mb-6  '>
            <h3 className='mb-2 font-bold'>About Us</h3>
            <p className='font-serif mb-2'>
            Lorem ipsum is placeholder 
            text commonly used in the graphic, print,
             and publishing industries for previewing 
             layouts and visual mockups.
            </p>
            <p>&copy; {new Date().getFullYear()} , 
            E-Shop all reght are reserved </p>

          </div>
          <FooterList>
          <h3 className='mb-2 font-bold'>Follow Us</h3>
          <div className='flex gap-2'>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
            <FaFacebook />
            </Link>
            <Link href="#">
            <FaYoutube />
            </Link>
            <Link href="#">
            <FaTwitter />
            </Link>
          </div>
          </FooterList>
        </div>
      </Container>
     </footer>
  )
}

export default Footer