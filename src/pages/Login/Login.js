import React , {useState } from 'react'
import logo from './logo.png';
import { Input, Container, Button, Center, Image, Text } from '@chakra-ui/react'




const Login = () => {
  
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

const loginControl = () =>{

  console.log (email + ' - ' +  password)
  setEmail('');
  setPassword('')


}


  return (
    <div>
      <Center h='500px'>
        <Container maxW='300px' color='black'>
          <Center>
            <Image boxSize='170px' src={logo}></Image>
          </Center>
          <Input type='email' value={email} placeholder='E-Mail' onChange={e=> setEmail(e.target.value)} />
          <Input type='password' value={password} mt={4} mb={4} placeholder='Şifre' onChange={e=> setPassword(e.target.value)} />
          <Center>
            <Button onClick={loginControl} colorScheme='red' size='md'>
              Giriş
            </Button>
          </Center>
          <Text fontSize='sm' color='tomato'>
            Yoksa sen sandik platformuna üye değil misin ? Hemen Kayıt Ol
          </Text>
        </Container>
      </Center>

    </div>
  )
}

export default Login