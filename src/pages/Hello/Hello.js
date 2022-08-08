import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { Header } from '../../components/helloComponents'

const Hello = () => {
  return (
    <>
      <Header />
      <Container>
      <Heading fontStyle='italic'>
        Çok Yakında Sizlerleyiz...
      </Heading>
      </Container>
    </>
  )
}

export default Hello
