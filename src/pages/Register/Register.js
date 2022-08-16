import { Button, Center, Container, Image, Input, Text, Link, Flex } from "@chakra-ui/react"
import { React, useState } from "react"
import { register, auth, update } from "../../firebase"
import sign from '../../assets/sign.png';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/authSlice"
import { useTranslation } from 'react-i18next'

export default function Register() {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.auth)
  const [displayName, setDisplayName] = useState(user.displayName || user.email)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [againPassword, setAgainPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const user = await register(email, password)
    await update({
      displayName
  })
  dispatch(login({
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      emailVerified: auth.currentUser.emailVerified,
      uid: auth.currentUser.uid
      }))

  }
  const { t } = useTranslation();
  return (
    <form onSubmit={handleSubmit}>
      <Center h='400px'>
        <Container maxW='400px' color='black'>
          <Flex direction="column" alignItems="center">
            <Image boxSize='120px' mb={4} src={sign} />
            <Text lineHeight='110%' mb={5} as='sub' fontSize='sm' color='white'>
              {t('registerLabel')} 
            </Text>
            <Input border='2px' type='text' value={displayName} placeholder={t('username')} mt={4} mb={4} onChange={e => setDisplayName(e.target.value)} />
            <Input border='2px' type='text' value={email} placeholder={t('email')} onChange={e => setEmail(e.target.value)} />
            <Input border='2px' type='password' value={password} mt={4} mb={4} placeholder={t('password')} onChange={e => setPassword(e.target.value)} />
            <Input border='2px' type='password' value={againPassword} mb={4} placeholder={t('passwordAgain')} onChange={e => setAgainPassword(e.target.value)} />
            <Button type="submit" disabled={!email || !password || !displayName || !againPassword} colorScheme='red' size='md'>
              {t('registerButton')}
            </Button>
          </Flex>
          <Center>
            <Text mt={5} as='sub' fontSize='sm' color='white' >
                {t('registerInfo')}
              <Link color="red" fontWeight='bold' href='/login'>
                {t('registerInfo2')}
              </Link>
            </Text>
          </Center>
        </Container>
      </Center>
    </form>
  )
}