import { Avatar, Box, Container, Flex, Heading, Image, TabPanels, TabList, Tab, TabPanel, Tabs, WrapItem, Text, HStack, Link, Center, VStack, Img } from '@chakra-ui/react'
import React from 'react'
import helloBg from '../../assets/helloBg.png'
import LinkedinIcon from '../../assets/LinkedinIcon.png'
import GithubLogo from '../../assets/GithubLogo.png'
import GithubIcon from '../../assets/GithubIcon.png'
import { EditIcon, ExternalLinkIcon, EmailIcon, ChatIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

const Hello = () => {

  const { t } = useTranslation();

  return (
    <Center>
      <Container maxWidth="container.lg">
        <Flex wrap='nowrap' align='center' justifyContent='space-between' marginTop={25}>
          <Heading color='white' flex='3' fontStyle="italic" fontSize={24} width={700} textAlign={{ sm: "center", md: "left" }}>
            {t('greeting')}
          </Heading>
          <Box flex='1' display={{ md: 'flex', lg: 'flex', sm: 'none', base: 'none' }} marginLeft={100}>
            <Image src={helloBg} alt="bg" />
          </Box>
        </Flex>


        <Tabs mt={10} variant='soft-rounded' colorScheme='white'>
          <Box>
            <Center>
              <TabList >
                <Tab color='white' mr={3}>{t('helloFirstLabel')}</Tab>
                <Tab color='white' mr={3}>{t('helloSecondLabel')}</Tab>
                <Tab color='white'>{t('helloThirdLabel')}</Tab>
              </TabList>
            </Center>



            <TabPanels mt={8}>
              <TabPanel  >
                <Flex justifyContent={'center'} flexDirection={{ sm: 'column', base: 'column', lg: 'row' }}>
                  <Flex mt={10} flex={{ md: '0.24', sm: 'auto' }} width={{ sm: '100%' }} justifyContent={{ sm: "center", md: "left", base: 'center' }} >
                    <WrapItem mb={{ sm: 10, md: 0 }}>
                      <VStack>
                        <Link isExternal>
                          <Avatar size='xl' ml={5} mx={'auto'} name='Ataberk Çetinkaya' src='https://avatars.githubusercontent.com/u/67511186?v=4' />
                        </Link>
                        <Text fontSize={19} ><b>Ataberk Çetinkaya</b></Text>
                        <HStack >
                          <Link href='https://www.linkedin.com/in/ataberkcetinkaya/'> <Img maxWidth={10} src={LinkedinIcon} /></Link>
                          <Link href='https://github.com/ataberkcetinkaya'>
                            <Img w={30} src={GithubIcon} />
                          </Link>
                        </HStack>
                      </VStack>
                    </WrapItem>
                  </Flex>
                  <Flex mt={10} flex={{ md: '0.23', sm: 'auto' }} width={{ sm: '100%' }} justifyContent={{ sm: "center", md: "left", base: 'center' }}>
                    <WrapItem mb={{ sm: 10, md: 0 }}>
                      <VStack>
                        <Link isExternal>
                          <Avatar size='xl' name='Merve Gölpınar' src='https://avatars.githubusercontent.com/u/93581835?v=4' />
                        </Link>
                        <Text fontSize={19}><b>Merve Gölpınar</b></Text>
                        <HStack>
                          <Link href='https://www.linkedin.com/in/mervegolpinar/'> <Img maxWidth={10} src={LinkedinIcon} /></Link>
                          <Link href='https://github.com/mervegolpinar' >

                            <Img w={30} src={GithubIcon} />

                          </Link>
                        </HStack>
                      </VStack>
                    </WrapItem>
                  </Flex>
                  <Flex mt={10} flex={{ md: '0.22', sm: 'auto' }} width={{ sm: '100%' }} justifyContent={{ sm: "center", md: "left", base: 'center' }} >
                    <WrapItem mb={{ sm: 10, md: 0 }}>
                      <VStack>
                        <Link isExternal>
                          <Avatar size='xl' name='Mert Aytuğ Gök' src='https://avatars.githubusercontent.com/u/91254283?v=4s' />
                        </Link>
                        <Text fontSize={19}><b>Mert Aytuğ Gök</b></Text>
                        <HStack>
                          <Link href='https://www.linkedin.com/in/mertaytuggok/'> <Img maxWidth={10} src={LinkedinIcon} /></Link>
                          <Link href='https://github.com/mertaytuggok'>

                            <Img w={30} src={GithubIcon} />

                          </Link>
                        </HStack>
                      </VStack>
                    </WrapItem>
                  </Flex>
                  <Flex mt={10} flex={{ md: '0.22', sm: 'auto' }} width={{ sm: '100%' }} justifyContent={{ sm: "center", md: "left", base: 'center' }}>
                    <WrapItem mb={{ sm: 10, md: 0 }}>
                      <VStack>
                        <Link isExternal>
                          <Avatar size='xl' name='Yavuz Selim Şerifoğlu' src='https://avatars.githubusercontent.com/u/70685127?v=4' />
                        </Link>
                        <Text fontSize={19}><b>Yavuz Selim Şerifoğlu</b></Text>
                        <HStack>
                          <Link href='https://www.linkedin.com/in/serifselim/'> <Img maxWidth={10} src={LinkedinIcon} /></Link>
                          <Link href='https://github.com/serifselim'>

                            <Img w={30} src={GithubIcon} />

                          </Link>
                        </HStack>
                      </VStack>
                    </WrapItem>
                  </Flex>
                </Flex>
              </TabPanel>


              <TabPanel>
                <Text fontSize='md'>
                  {t('aboutTheAppText')} 
                    <Link borderRadius={5} bg='gray.600' href="/register">{t('aboutTheAppText2')}</Link> 
                    {t('aboutTheAppText3')}
                </Text>
                <Tabs mt={8}>
                  <HStack >
                    <EmailIcon /><Link href="/register">{t('register')}</Link><Text>/</Text><Link href="/login">{t('login')}</Link>
                  </HStack>
                  <HStack mt={3}>
                    <EditIcon /><Text>{t('createPollText')}</Text>
                  </HStack>
                  <HStack mt={3}>
                    <ExternalLinkIcon /><Text>{t('sharePollText')}</Text>
                  </HStack>
                  <HStack mt={3}>
                    <ChatIcon /><Text>{t('commentText')}</Text>
                  </HStack>
                </Tabs>

              </TabPanel>

              <TabPanel>
                <Text>{t('githubText')}</Text>
                <Link href=' https://github.com/serifselim/sandik-voting-app'>
                  <HStack mt={3}>
                    <Img width={40} src={GithubIcon} />
                    <Img maxWidth={110} src={GithubLogo} />
                  </HStack>
                </Link>
              </TabPanel>
            </TabPanels>
          </Box>
        </Tabs>
      </Container>
    </Center>
  )
}

export default Hello
