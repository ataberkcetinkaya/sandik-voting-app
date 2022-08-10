import { Avatar, Box, Container, Flex, Heading, Image, TabPanels, TabList, Tab, TabPanel, Tabs, Wrap, WrapItem, Text, HStack, Link, Icon } from '@chakra-ui/react'
import React from 'react'
import helloBg from '../../assets/helloBg.png'
import { AddIcon, EditIcon, CheckIcon } from '@chakra-ui/icons'

const Hello = () => {
  return (
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
   

      <Tabs>
        <TabList>
          <Tab>Hazırlayanlar</Tab>
          <Tab>Uygulama Hakkında</Tab>
          <Tab>İletişim</Tab>
        </TabList>

        <TabPanels mt={3}>
          <TabPanel>
              <Wrap>
                <Flex flex='0.24'>
                  <WrapItem>
                    <Link href='https://github.com/ataberkcetinkaya' isExternal>
                      <Avatar ml={10} name='Ataberk Çetinkaya' src='https://avatars.githubusercontent.com/u/67511186?v=4' />
                    </Link>
                  </WrapItem>
                </Flex>
                <Flex flex='0.22'>
                  <WrapItem>
                    <Link href='https://github.com/mervegolpinar' isExternal>
                      <Avatar name='Merve Gölpınar' src='https://avatars.githubusercontent.com/u/93581835?v=4' />
                    </Link>
                  </WrapItem>
                </Flex>
                <Flex flex='0.23'>
                  <WrapItem>
                    <Link href='https://github.com/mertaytuggok' isExternal>
                      <Avatar name='Mert Aytuğ Gök' src='https://avatars.githubusercontent.com/u/91254283?v=4s' />
                    </Link>
                  </WrapItem>
                </Flex>
                <WrapItem>
                  <Link href='https://github.com/serifselim' isExternal>
                    <Avatar name='Yavuz Selim Şerifoğlu' src='https://avatars.githubusercontent.com/u/70685127?v=4' />
                  </Link>
                </WrapItem>
              </Wrap>
              <HStack mt={3}>
                <Flex flex='0.2'>
                  <Text>Ataberk Çetinkaya</Text>
                </Flex>
                <Flex flex='0.2'>
                  <Text>Merve Gölpınar</Text>
                </Flex>
                <Flex flex='0.2'>
                  <Text>Mert Aytuğ Gök</Text>
                </Flex>
                <Flex flex='0.2'>
                  <Text>Yavuz Selim Şerifoğlu</Text>
                </Flex>
              </HStack>
          </TabPanel>
          <TabPanel>
            <p><Text fontSize='md'>Sandık ekibimiz tarafından herkese merhaba, uygulamamızı hemen kullanmaya başlamak için <Link href="/register" color='red'>Üye Ol</Link> sayfamızdan kaydını yapabilirsin.</Text></p>
              <br></br>
            <p>
              <ul>
                <li>
                  <Text pb={2} fontSize='lg'>Üye Ol <Icon ml={2} as={EditIcon} color='red.400'></Icon></Text>
                </li>
                <li>
                  <Text pb={2} fontSize='lg'>Anketini Oluştur <Icon ml={2} as={AddIcon} color='blue.600'></Icon></Text>
                </li>
                <li>
                  <Text fontSize='lg'>Paylaş ve Sonuçları Görüntüle <Icon ml={2} as={CheckIcon} color='green.500'></Icon></Text>
                </li>
              </ul>
            </p>
          </TabPanel>
          <TabPanel>
            <p>Projemize GitHub üzerinden erişmek için;</p>
            <Link href=" https://github.com/serifselim/sandik-voting-app" isExternal color='blue'>Hemen Tıkla</Link>
          </TabPanel>
        </TabPanels>
        </Tabs>

        
      </Container>
  )
}

export default Hello
