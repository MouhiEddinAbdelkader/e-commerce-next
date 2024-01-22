import React from 'react'
import Container from '../componants/Container'
import FormWrap from '../componants/formwrap'
import RegisterForm from './RegisterForm'

const page = () => {
  return (
    <Container>
        <FormWrap>
            <RegisterForm />
        </FormWrap>
    </Container>
  )
}

export default page