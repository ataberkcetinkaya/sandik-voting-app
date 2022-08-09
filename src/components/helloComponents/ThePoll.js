import { Box, Center, Checkbox, Container, Flex, HStack, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import like from '../../assets/like.png'
import comment from '../../assets/comment.png'

const ThePoll = () => {
  return (
    <Center>
        <Box bg='white' border='1px' borderColor='gray.400' borderRadius='10' color='black' h='216px' w='420px'>
            <Text fontSize='lg' mt={3} ml={5} mr={1}>
                <b>Sonraki seçimde oyunuzu hangi partiye vermeyi düşünüyorsunuz ?</b>
            </Text>

            <Container mt={8}>
                <HStack>
                    <Flex flex='1'>
                        <Box ml={5} textAlign='center'>
                            <Checkbox  size='lg' defaultChecked></Checkbox>
                            <Text>SMTH</Text>
                        </Box>
                    </Flex>
                    <Flex flex='1'>
                        <Box  textAlign='center'>
                            <Checkbox  size='lg' defaultChecked></Checkbox>
                            <Text>SMTH</Text>
                        </Box>
                    </Flex>
                    <Flex flex='1'>
                        <Box  textAlign='center'>
                            <Checkbox  size='lg' defaultChecked></Checkbox>
                            <Text>SMTH</Text>
                        </Box>
                    </Flex>
                    <Flex >
                        <Box mr={2} textAlign='center'>
                            <Checkbox  size='lg' defaultChecked></Checkbox>
                            <Text>SMTH</Text>
                        </Box>
                    </Flex>
                </HStack>
           </Container>
            
           <HStack >
                <Flex mt={7} ml={5} flex='1'>
                    <Text><b>34</b></Text>
                    <Image ml={2} src={like} height='22px' width='22px' alt='logo'/>

                    <Text ml={2}><b>12</b></Text>
                    <Image ml={2} src={comment} height='22px' width='22px' alt='logo'/>
                </Flex>
                <Flex >
                    <Text fontSize='12px' mt={7} mr={5}>
                        <Link color='brand.textRed' href='/'>Ataberk</Link>, tarafından oluşturuldu
                    </Text>
                </Flex>
            </HStack>


        </Box>
    </Center>
  )
}

export default ThePoll