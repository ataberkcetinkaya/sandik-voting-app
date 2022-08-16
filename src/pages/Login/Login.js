import React, { useState } from 'react'
import { Input, Container, Button, Center, Image, Text, Link, Flex } from '@chakra-ui/react'
import { login } from '../../firebase';
import { useNavigate } from "react-router-dom";
import useLogin from '../../assets/useLogin.png';
import { useTranslation } from 'react-i18next';

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault()
    const user = await login(email, password)
    if (user) {
      navigate('/main', {
        replace: true
      })
    }
  }

  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit}>
      <Center h='400px'>
        <Container>
          <Flex direction="column" alignItems="center">
            <Image boxSize='120px' mb={4} src={useLogin} color='white' />
            <Text lineHeight='110%' mb={8} as='sub' fontSize='sm' >
              {t('loginLabel')}
            </Text>
            <Input w='300px' type='email' value={email} placeholder={t('email')} onChange={e => setEmail(e.target.value)} />
            <Input w='300px' type='password' value={password} mt={4} mb={4} placeholder={t('password')} onChange={e => setPassword(e.target.value)} />
            <Button type="submit" disabled={!email || !password} colorScheme='red' color='white' size='md'>
              {t('loginButton')} 
            </Button>
          </Flex>
          <Center>
            <Text mt={5} as='sub' fontSize='sm' color='white'>
              {t('loginInfo')} 
              <Link color='red' fontWeight='bold' href='/register'>
              {t('loginInfo2')}
              </Link>
            </Text>
          </Center>
        </Container>
      </Center>
    </form>
  )
}

export default Login