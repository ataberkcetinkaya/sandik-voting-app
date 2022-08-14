import { ChatIcon } from '@chakra-ui/icons'
import { Box, ListItem, Container, Flex, HStack, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const VoteResult = ({ item }) => {
    if (item) {
        return (
            <ListItem mt={3} backgroundColor='gray.700'>
                <Box padding={4} borderRadius='10' border='1px' borderColor='gray.400'>
                    <Text
                        fontSize='16px' >
                        <b>Sonraki seçimde oyunuzu hangi partiye vermeyi düşünüyorsunuz ?</b>
                    </Text>
                    <Container mt={5}>
                        {item.sidesArray.map((item, index) => (
                            <Flex key={index} justifyContent='space-between' width='100%' mt={3}>
                                <Box flex='3' mr='3'>
                                    <Box
                                        w={`${item.result}%`}
                                        h=" 30px"
                                        background='red.600 !important'
                                        fontWeight='bold'
                                        as='button' borderRadius='md' px={4}>
                                    </Box>
                                </Box>
                                <Text flex='1' textAlign='right'>
                                    {`${item.text} ${item.result} %`}
                                </Text>
                            </Flex>
                        ))}
                        <Flex alignItems='center' justifyContent='space-between' mt={3}>
                            <HStack>
                                <Text><b>{item.comments.length}</b></Text>
                                <ChatIcon w="22px" h="22px" />
                            </HStack>

                            <Text
                                w={200}
                                textAlign='right'
                                fontSize='12px'>
                                <Link color='brand.theRed'>{item.displayName}</Link>, tarafından oluşturuldu</Text>
                        </Flex>
                    </Container>
                </Box>
            </ListItem>

        )
    }
}
export default VoteResult