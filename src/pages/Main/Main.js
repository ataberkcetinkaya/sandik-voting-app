import React from 'react'
import { Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { logout } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Main = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login', {
      replace: true
    })
  }

  const { user } = useSelector(state => state.auth)
  console.log(user);

  return (
    <Grid >
      <Text >
        Oturumun Açık {user.email}
        <Button onClick={handleLogout} px={4} m={2} h={8} as='button' borderRadius='md' bg='blue.500' align='center'>Çıkış Yap</Button>
      </Text>
    </Grid>
  )
}

export default Main