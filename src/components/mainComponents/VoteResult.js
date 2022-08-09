import { ChatIcon, LinkIcon } from '@chakra-ui/icons'
import { Box, Center, CircularProgress, CircularProgressLabel, Container, Flex, HStack, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const VoteResult = () => {
    return (
        <Center mt={4}>
            <Box w="420px" h="340px" borderRadius='10' border='1px' borderColor='gray.400'>
                <Text
                    fontSize='16px' mt={3} ml={5} mr={1} >
                    <b>Sonraki seçimde oyunuzu hangi partiye vermeyi düşünüyorsunuz ?</b>
                </Text>

                <Container mt={5}>
                    <HStack>
                        <SimpleGrid columns={2} spacingX='210px'>
                            <VStack >
                                <Box
                                    w="96px"
                                    h=" 48px"
                                    as='button' borderRadius='md' bg='gray.200' color='black' px={4}>
                                    Label
                                </Box>
                                <Box
                                    w="96px"
                                    h=" 48px"
                                    as='button' borderRadius='md' bg='gray.200' color='black' px={4}>
                                    Label
                                </Box>
                                <Box
                                    w="96px"
                                    h=" 48px"
                                    as='button' borderRadius='md' bg='gray.200' color='black' px={4} >
                                    Label
                                </Box>
                                <Box
                                    w="96px"
                                    h=" 48px"
                                    as='button' borderRadius='md' bg='gray.200' color='black' px={4}>
                                    Label
                                </Box>
                            </VStack>

                            <VStack>
                                <CircularProgress
                                    value={80}
                                    color='brand.theRed'
                                    thickness='8px'>
                                    <CircularProgressLabel>%</CircularProgressLabel>
                                </CircularProgress>
                                <CircularProgress
                                    value={50}
                                    color='brand.theRed'
                                    thickness='8px'>
                                    <CircularProgressLabel>%</CircularProgressLabel>
                                </CircularProgress>
                                <CircularProgress
                                    value={80}
                                    color='brand.theRed'
                                    thickness='8px'>
                                    <CircularProgressLabel>%</CircularProgressLabel>
                                </CircularProgress>
                                <CircularProgress
                                    value={80}
                                    color='brand.theRed'
                                    thickness='8px'>
                                    <CircularProgressLabel>%</CircularProgressLabel>
                                </CircularProgress>
                            </VStack>
                        </SimpleGrid>
                    </HStack>

                    <SimpleGrid columns={2} spacingX='75px' mt={3} ml={3}  >

                        <HStack>
                            <Text><b>8</b></Text>
                            <ChatIcon w="22px" h="22px" />
                        </HStack>

                        <Text
                            w={200}
                            fontSize='12px'>
                            <Link color='brand.theRed'>Mert</Link>, tarafından oluşturuldu</Text>
                    </SimpleGrid>
                </Container>
            </Box>
        </Center>

    )
}

export default VoteResult