import React, { useContext } from 'react'
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
import { ChevronDownIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
// Assets
import logo from '../../assets/logo.png'
// Router
import { useLocation, useNavigate } from 'react-router-dom'
// Redux
import { useSelector } from 'react-redux'
// Firebase
import { logout } from '../../firebase'
import LocaleContext from '../../LocaleContext';
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

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

  const { locale } = useContext(LocaleContext);

  function changeLocale (l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  const { t } = useTranslation();

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
                  {isOpen ? t('closeButton') : user.displayName}
                </MenuButton>
                <MenuList backgroundColor='gray.600'>
                  <MenuItem _hover={{ backgroundColor: 'gray.700 !important' }} mb={2} onClick={() => navigate('/create')}>{t('createPollButton')}</MenuItem>
                  <MenuItem _hover={{ backgroundColor: 'gray.700 !important' }} mb={2} onClick={() => navigate('/comments')}>{t('gotoCommentsButton')}</MenuItem>
                  <MenuItem _hover={{ backgroundColor: 'gray.700 !important' }} onClick={handleLogout}>{t('logoutButton')}</MenuItem>
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
          <Link to="/register">
            <Button
              variant="outline"
              _hover={{ bg: 'red.600', color: 'white' }}
              marginRight={5}
            >
              {t('register')}
            </Button>
          </Link>
          <Link to="/login">
            <Button
              variant="outline"
              _hover={{ bg: 'red.600', color: 'white' }}
            >
              {t('login')}
            </Button>
            
          </Link>

          <Menu>
            <MenuButton variant="outline" ml={5} as={Button} rightIcon={<ChevronDownIcon />}>
              Dil / Language
            </MenuButton>
            <MenuList backgroundColor='gray.600'>
              <MenuItem _hover={{ backgroundColor: 'gray.700 !important' }} mb={2} onClick={() => changeLocale('en')}>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png'
                alt='Fluffybuns the destroyer'
                mr='12px'
              />
                English
              </MenuItem>
              <MenuItem _hover={{ backgroundColor: 'gray.700 !important' }} onClick={() => changeLocale('tr')}>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png'
                alt='Fluffybuns the destroyer'
                mr='12px'
              />
                Turkish
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      )}

      {((pathname === '/create') || (pathname === '/comments')) && (
        <Box>
          <Link to="/main">
            <Button variant="outline" _hover={{ bg: 'red.600', color: 'white' }}>
              {t('theArenaButton')}
            </Button>
          </Link>
        </Box>
      )}

      {(pathname === '/register' || pathname === '/login') && (
        <Box>
          <Link to="/">
            <Button variant="outline" _hover={{ bg: 'red.600', color: 'white' }}>
              {t('homeButton')}
            </Button>
          </Link>
        </Box>
      )}

    </Flex>
  )
}

export default Header