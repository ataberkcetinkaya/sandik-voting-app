import { Button, Center, Container, Image, Input, Text, Link, Flex } from "@chakra-ui/react"
import { React, useState } from "react"
import { register } from "../../firebase"
import sign from '../../assets/sign.png';

export default function Register() {

  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [againPassword, setAgainPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const user = await register(email, password)

  }
  return (
    <form onSubmit={handleSubmit}>
      <Center h='400px'>
        <Container maxW='400px' color='black'>
          <Flex direction="column" alignItems="center">
            <Image boxSize='120px' mb={4} src={sign} />
            <Text lineHeight='110%' mb={5} as='sub' fontSize='sm' color='black'>
              "Sandık'ta oylamaya bende varım!" diyorsan hemen kaydol </Text>
            <Input border='2px' type='text' value={userName} placeholder='Kullanıcı Adı' mt={4} mb={4} onChange={e => setUserName(e.target.value)} />
            <Input border='2px' type='text' value={email} placeholder='E-Mail' onChange={e => setEmail(e.target.value)} />
            <Input border='2px' type='password' value={password} mt={4} mb={4} placeholder='Şifre' onChange={e => setPassword(e.target.value)} />
            <Input border='2px' type='password' value={againPassword} mb={4} placeholder='Şifre Tekrarı' onChange={e => setAgainPassword(e.target.value)} />
            <Button type="submit" disabled={!email || !password || !userName || !againPassword} colorScheme='red' size='md'>
              Kayıt Ol
            </Button>
          </Flex>
          <Center>
            <Text mt={5} as='sub' fontSize='sm' color='black' >
              Hesabın zaten var mı ? O zaman <Link color="red" fontWeight='bold' href='/login'>Giriş Yap</Link>
            </Text>
          </Center>
        </Container>
      </Center>
    </form>
  )
}