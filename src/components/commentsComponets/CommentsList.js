import React from 'react'
import { Box, Divider, Flex, List, ListItem, Text } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'


const CommentsList = ({ comments }) => {
    return (
        <Box>
            <Text fontSize='4xl'>
                <ChatIcon color='red.500' />
                <b> Yorumlar </b>
            </Text>
            <Divider mt={2} boxShadow='red-lg' p='1' spacing='8' rounded='xl' bg='red' />
            <List mt={7} spacing={3} display={'flex'}>
                <ListItem width={'100%'} mx={{ base: 'auto', sm: 'auto', md: '0' }}>
                    {comments && comments.map((item, index) => (
                        <Box key={index} borderRadius={5} mt={3} bg='gray.500'>
                            <Flex mx={'4'} justifyContent='space-between' alignItems='center' p={2}>
                                <Text mr={4}>{item.text}</Text>
                                <Text fontStyle='italic' fontSize={12}>{item.displayName}  <hr></hr></Text>
                            </Flex>
                        </Box>
                    ))}
                </ListItem>
            </List>
        </Box>
    )
}

export default CommentsList