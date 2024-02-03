import React from 'react'
import CheckoutClient from './ChekoutClient'
import Container from '../componants/Container'
import FormWrap from '../componants/formwrap'

const Checkout = () => {
  return (
    <div className='p-8'>
        <Container>
            <FormWrap>
                <CheckoutClient />
            </FormWrap>
        </Container>
    </div>
  )
}

export default Checkout