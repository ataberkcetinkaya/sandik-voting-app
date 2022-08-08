import React from 'react'
import { Box, Flex,  Image,  HStack,Button} from '@chakra-ui/react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const HeaderToHome = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingInline={10}
      color="black">

      <Flex >
        <HStack marginLeft='-24px' marginBottom='-150px' >
            <Box>
                <Image src={logo} height='auto' width={130} alt='logo' ></Image>
            </Box>
                <Link to="/">
                    <Button variant="outline" _hover={{ bg: 'red.600', color: 'white' }}>
                        Home
                    </Button>
                </Link>
        </HStack>
      </Flex>

    </Flex>
  )
}

export default HeaderToHome