import React from 'react'
import Container from '../componants/Container'
import FormWrap from '../componants/formwrap'
import LoginForm from './LoginForm'
import { getCurrentUser } from '@/actions/GetCurrentUser'

const page = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Container>
        <FormWrap>
            <LoginForm currentUser={currentUser} />
        </FormWrap>
    </Container>
  )
}

export default page