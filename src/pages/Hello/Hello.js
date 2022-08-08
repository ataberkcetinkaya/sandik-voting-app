import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import helloBg from '../../assets/helloBg.png'

const Hello = () => {
  return (
    <Container maxWidth="container.lg">
      <Flex wrap='nowrap' align='center' justifyContent='space-between' marginTop={25}>
        <Heading color='gray.700' flex='2' fontStyle="italic" fontSize={24} width={700}>
          Sandık, içerisinde kendi görüşüne göre oy kullan ve diğer kullanılan
          oyları hakkında kendi fikrini özgürce paylaş !
        </Heading>
        <Box flex='1' marginLeft={100}>
          <Image src={helloBg} alt="bg" />
        </Box>
      </Flex>
    </Container>
  )
}

export default Hello
