import React from 'react'
import {
  Box,
  Flex,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
  Text
} from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
// Assets
import logo from '../../assets/logo.png'
// Router
import { useLocation, useNavigate } from 'react-router-dom'
// Redux
import { useSelector } from 'react-redux'
// Firebase
import { logout } from '../../firebase'

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth);

  const handleLogout = async () => {
    await logout()
    navigate('/login', {
      replace: true
    })
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingBlock={6}
      paddingInline={10}
      color="black"
    >
      <Flex align="center" justify='center' mr={5}>
        <Box objectFit='cover' marginBottom='-20px' marginLeft='-24px'>
          <Image src={logo} height='auto' width={130} alt='logo' />
        </Box>
      </Flex>

      {
        pathname === '/main' && (
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} as={Button} rightIcon={<TriangleDownIcon />}>
                  {isOpen ? 'Kapat' : user.displayName}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => navigate('/create')}>Oylama Oluştur</MenuItem>
                  <MenuItem onClick={handleLogout}>Çıkış Yap</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        )
      }

      {pathname === '/' && (
        <Box
          mt={{ base: 4, md: 0 }}
        >
          <Link to="/login">
            <Button
              variant="outline"
              _hover={{ bg: 'red.600', color: 'white' }}
              marginRight={5}
            >
              Üye Ol
            </Button>
          </Link>
          <Link to="/register">
            <Button
              variant="outline"
              _hover={{ bg: 'red.600', color: 'white' }}
            >
              Giriş Yap
            </Button>
          </Link>
        </Box>
      )}

      {(pathname === '/create') && (
        <Box>
          <Link to="/main">
            <Button variant="outline" _hover={{ bg: 'red.600', color: 'white' }}>
              Meydan
            </Button>
          </Link>
        </Box>
      )}

      {(pathname === '/register' || pathname === '/login') && (
        <Box>
          <Link to="/">
            <Button variant="outline" _hover={{ bg: 'red.600', color: 'white' }}>
              Ana Sayfa
            </Button>
          </Link>
        </Box>
      )}

    </Flex>
  )
}

export default Header