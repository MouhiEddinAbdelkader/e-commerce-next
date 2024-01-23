import React from 'react'
import Container from '../componants/Container'
import FormWrap from '../componants/formwrap'
import LoginForm from './LoginForm'

const page = () => {
  return (
    <Container>
        <FormWrap>
            <LoginForm />
        </FormWrap>
    </Container>
  )
}

export default page