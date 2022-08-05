import React, { useState } from 'react'
import logo from './logo.png';
import { Input, Container, Button, Center, Image, Text, Link } from '@chakra-ui/react'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginControl = () => {

    console.log(email + ' - ' + password)
    setEmail('');
    setPassword('')
  }


  return (
    <div>
      <Center h='500px'>
        <Container color='black'>
          <Center>
            <Image boxSize='170px' src={logo}></Image>
          </Center>
          <Center>
            <Input w='300px' type='email' value={email} placeholder='E-Mail' onChange={e => setEmail(e.target.value)} />
          </Center>
          <Center>
            <Input w='300px' type='password' value={password} mt={4} mb={4} placeholder='Şifre' onChange={e => setPassword(e.target.value)} />
          </Center>
          <Center>
            <Button colorScheme='red' onClick={loginControl} color='white' size='md'>
              Giriş Yap
            </Button>
          </Center>
          <Center>
            <Text mt={5} as='sub' fontSize='sm' color='black'>
              Yoksa sen sandik platformuna üye değil misin ? Hemen <Link color='red' fontWeight='bold' href='#'>
                Kayıt Ol
              </Link>
            </Text>
          </Center>
        </Container>
      </Center>

    </div>
  )
}

export default Login