import React from 'react'
import {
  Box,
  Flex,
  Button,
  Image
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      color="black"
    >
      <Flex align="center" justify='center' mr={5}>
        <Box objectFit='cover' marginBottom='-20px' marginLeft='-24px'>
          <Image src={logo} height='auto' width={130} alt='logo' />
        </Box>
      </Flex>

      <Box
        mt={{ base: 4, md: 0 }}
      >
        <Link to="/login">
          <Button
            variant="outline"
            _hover={{ bg: 'red.600', color: 'white' }}
            marginRight={5}
          >
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button
            variant="outline"
            _hover={{ bg: 'red.600', color: 'white' }}
          >
            Register
          </Button>
        </Link>
      </Box>
    </Flex>
  )
}

export default Header