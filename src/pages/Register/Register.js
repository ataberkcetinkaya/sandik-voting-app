import React, {useState} from 'react'
import logo from './logo.png';
import { Input, Container, Button, Center, Image, Text, Link } from '@chakra-ui/react'

const Register = () => {
  
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[username, setUsername]=useState('');
    
    const registerControl = () =>{
    
      console.log (email + ' - ' +  password)
      setEmail('');
      setPassword('')
    }

  return (
    <Center h='600px'>
        <Container maxW='300px' color='black'>
          <Center>
            <Image boxSize='170px' src={logo}></Image>
          </Center>
          <Input border='2px' borderColor='brand.grayBlack' type='text' value={username} placeholder='Kullanıcı Adı' onChange={e=> setUsername(e.target.value)} />
          <Input border='2px' borderColor='brand.grayBlack' type='email' value={email} mt={4} mb={4} placeholder='E-Mail' onChange={e=> setEmail(e.target.value)} />
          <Input border='2px' borderColor='brand.grayBlack' type='password' value={password} mb={4} placeholder='Şifre' onChange={e=> setPassword(e.target.value)} />
          <Input border='2px' borderColor='brand.grayBlack' type='password' value={password} mb={4} placeholder='Şifre Tekrarı' onChange={e=> setPassword(e.target.value)} />
          <Center>
          
            <Button onClick={registerControl}  bg='brand.grayBlack'  color='white' size='md'>
              Kayıt Ol
            </Button>
            
          </Center>
          <Text mt={8} fontSize='sm' color='brand.grayBlack'>
            Hesabın zaten var mı? O zaman <Link color='brand.theRed'>Giriş Yap</Link>
          </Text>
        </Container>
      </Center>
  )
}

export default Register