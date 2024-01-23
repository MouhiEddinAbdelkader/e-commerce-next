import React from 'react'
import Container from '../Container'
import { CategoriesList } from '@/utils/Categories'

const Categories = () => {
  return (
    <div className='bg-white'>
      <Container>
        <div className=' pt-4 flex flex-row
         items-center 
         justify-center
         overflow-x-auto
        '>
          {
            CategoriesList.map((item) => (
              <div>
                
              </div>
            ))
          }        
        </div>
      </Container>
        
        </div>
  )
}

export default Categories