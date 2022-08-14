import { Avatar, Box, Container, Flex, Heading, Image, TabPanels, TabList, Tab, TabPanel, Tabs, Wrap, WrapItem, Text, HStack, Link, Icon, Center, VStack, ScaleFade, useDisclosure, Button, Img } from '@chakra-ui/react'
import React from 'react'
import helloBg from '../../assets/helloBg.png'
import LinkedinLogo from '../../assets/LinkedinLogo.png'
import GithubLogo from '../../assets/GithubLogo.png'
import GithubIcon from '../../assets/GithubIcon.png'
import { EditIcon,  ExternalLinkIcon, EmailIcon, ChatIcon } from '@chakra-ui/icons'


const Hello = () => {



  return (
    <Center>
      <Container maxWidth="container.lg">
        <Flex wrap='nowrap' align='center' justifyContent='space-between' marginTop={25}>
          <Heading color='gray.700' flex='3' fontStyle="italic" fontSize={24} width={700}>
            Sandık, içerisinde kendi görüşüne göre oy kullan ve diğer kullanılan
            oylar hakkında kendi fikrini özgürce paylaş !
          </Heading>
          <Box flex='1' marginLeft={100}>
            <Image src={helloBg} alt="bg" />
          </Box>
        </Flex>


        <Tabs mt={10} variant='soft-rounded'>
          <Box>
            <Center>
              <TabList  >
                <Tab mr={3}>Projeyi Geliştirenler</Tab>
                <Tab mr={3}>Uygulama Hakkında</Tab>
                <Tab>İletişim</Tab>
              </TabList>
            </Center>



            <TabPanels ml={28} mt={8}>
              <TabPanel  >
                <Wrap>
                  <Flex flex='0.24'>
                    <WrapItem >
                      <VStack>
                        <Link isExternal>
                          <Avatar ml={5} name='Ataberk Çetinkaya' src='https://avatars.githubusercontent.com/u/67511186?v=4' />
                        </Link>
                        <Text><b>Ataberk Çetinkaya</b></Text>
                        <Link href='https://www.linkedin.com/in/ataberkcetinkaya/'> <Img maxWidth={120} src={LinkedinLogo} /></Link>

                        <Link href='https://github.com/ataberkcetinkaya'>
                          <HStack>
                            <Img w={30} src={GithubIcon} />
                            <Img maxWidth={115} src={GithubLogo} />
                          </HStack>
                        </Link>
                      </VStack>
                    </WrapItem>
                  </Flex>
                  <Flex flex='0.23'>
                    <WrapItem>
                      <VStack>
                        <Link isExternal>
                          <Avatar name='Merve Gölpınar' src='https://avatars.githubusercontent.com/u/93581835?v=4' />
                        </Link>
                        <Text><b>Merve Gölpınar</b></Text>
                        <Link href='https://www.linkedin.com/in/mervegolpinar/'> <Img maxWidth={120} src={LinkedinLogo} /></Link>
                        <Link href='https://github.com/mervegolpinar' >
                          <HStack>
                            <Img w={30} src={GithubIcon} />
                            <Img maxWidth={115} src={GithubLogo} />
                          </HStack>
                        </Link>
                      </VStack>
                    </WrapItem>
                  </Flex>
                  <Flex flex='0.22'>
                    <WrapItem>
                      <VStack>
                        <Link isExternal>
                          <Avatar name='Mert Aytuğ Gök' src='https://avatars.githubusercontent.com/u/91254283?v=4s' />
                        </Link>
                        <Text><b>Mert Aytuğ Gök</b></Text>
                        <Link href='https://www.linkedin.com/in/mertaytuggok/'> <Img maxWidth={120} src={LinkedinLogo} /></Link>
                        <Link href='https://github.com/mertaytuggok'>
                          <HStack>
                            <Img w={30} src={GithubIcon} />
                            <Img maxWidth={115} src={GithubLogo} />
                          </HStack>
                        </Link>
                      </VStack>
                    </WrapItem>
                  </Flex>
                  <WrapItem>
                    <VStack>
                      <Link isExternal>
                        <Avatar name='Yavuz Selim Şerifoğlu' src='https://avatars.githubusercontent.com/u/70685127?v=4' />
                      </Link>
                      <Text><b>Yavuz Selim Şerifoğlu</b></Text>
                      <Link href='https://www.linkedin.com/in/serifselim/'> <Img maxWidth={120} src={LinkedinLogo} /></Link>
                      <Link href='https://github.com/serifselim'>
                        <HStack>
                          <Img w={30} src={GithubIcon} />
                          <Img maxWidth={115} src={GithubLogo} />
                        </HStack>
                      </Link>
                    </VStack>
                  </WrapItem>
                </Wrap>
              </TabPanel>


              <TabPanel>
                <Text fontSize='md'>
                Sandık,birçok kişinin fikirlerini öğrenmek ve yorumlamak için oluşturulan global bir anket platformudur. 
                Merak ettiğiniz ve kamoyu araştırmalarınız için kullanabileceğiniz,objektif ve tarafsız sonuçları sizlere sunmaktadır. 
                Ayrıca anketlere katılarak özgürce düşüncelerinizi paylaşabilir ve sonuçlara katkı sağlayabilirsiniz. 
                Kişisel düşüncelerin korunması kapsamında,oy kullananların bilgileri hiçbir şekilde anket sahibi ile paylaşılmayacaktır. 
                Anket sahibi sadece oylama sonucunu yüzdesel olarak görebilecektir. 
                Sende Sandık'ta yer alarak öngörülmesi güç olan sorularına cevap bulabilirsin. 
                Hadi sende platformumuza hemen <Link  borderRadius={5} bg='gray.600' href="/register" >Üye Ol</Link> ve kullanmaya başla.
                </Text>
               <Tabs mt={8}>
                <HStack >
                <EmailIcon /><Link  href="/register">Üye Ol</Link><Text>/</Text><Link  href="/login">Giriş Yap</Link>
                </HStack> 
                <HStack mt={3}>
                <EditIcon /><Text>Anketini Oluştur</Text>
                </HStack> 
                <HStack mt={3}>
                <ExternalLinkIcon /><Text>Paylaş ve Sonuçları Görüntüle</Text>
                </HStack> 
                <HStack mt={3}>
                <ChatIcon /><Text>Yorumlarda Fikirlerini Paylaş</Text>
                </HStack> 
                </Tabs>
               
              </TabPanel>

              <TabPanel>
                <Text>Projemize Açık Kaynak Kodları İçin..</Text>
                <Link href=' https://github.com/serifselim/sandik-voting-app'>
                  <HStack mt={3}>
                    <Img Width={40} src={GithubIcon} />
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
