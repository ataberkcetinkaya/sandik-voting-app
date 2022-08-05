import React, { useState } from 'react'
import { Input, Container, Button, Center, Image, Text, Link, Flex } from '@chakra-ui/react'
import logo from '../../assets/logo.png';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(email + ' - ' + password)
    setEmail('');
    setPassword('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Center h='800px'>
        <Container color='black'>
          <Center>
            <Image boxSize='170px' src={logo}></Image>
          </Center>
          <Flex direction="column" alignItems="center">
            <Input w='300px' type='email' value={email} placeholder='E-Mail' onChange={e => setEmail(e.target.value)} />
            <Input w='300px' type='password' value={password} mt={4} mb={4} placeholder='Şifre' onChange={e => setPassword(e.target.value)} />
            <Button colorScheme='red' color='white' size='md'>
              Giriş Yap
            </Button>
            </Flex>
          <Center>
            <Text mt={5} as='sub' fontSize='sm' color='black'>
              Yoksa sen sandik platformuna üye değil misin ? Hemen <Link color='red' fontWeight='bold' href='/register'>
                Kayıt Ol
              </Link>
            </Text>
          </Center>
        </Container>
      </Center>

    </form>
  )
}

export default Login