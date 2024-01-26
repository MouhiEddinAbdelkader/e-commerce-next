'use client';
import React from 'react'
import Container from '../Container'
import { CategoriesList } from '@/utils/categories'
import Category from './Category'
import { MdDns } from 'react-icons/md'

const Categories = () => {
  return (
    <div className='bg-white'>
      <Container>
        <div className=' pt-4 flex flex-row
         items-center 
         justify-between
         overflow-x-auto
        '>
          {
            CategoriesList.map((item) => (
              <Category 
              key={item.id}
              label={item.category}
              icon={MdDns}

              />
            ))
          }        
        </div>
      </Container>
        
        </div>
  )
}

export default Categories