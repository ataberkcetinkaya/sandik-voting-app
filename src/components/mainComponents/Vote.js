import { Box, Button, Flex, ListItem, Text } from '@chakra-ui/react'
import React from 'react'

const Vote = ({ voteIndex, item, handleClick }) => {
    if (item) {
        return (
            <ListItem width='100%' mt={5} mb={5} borderRadius={10} p={4} key={voteIndex} mb={15} background='gray.700'>
                <Flex alignItems='center' mt={3} mb={8} justifyContent='space-between'>
                    <Box flex='3'>
                        <Text textAlign='center' fontSize={19} fontStyle='italic' fontWeight='bold'>{item.head} </Text>
                    </Box>
                </Flex>
                <Flex justifyContent='space-between' gridGap={4}>
                    {
                        item.sidesArray.map((item, sideIndex) => (
                            <Button flex='1' onClick={() => handleClick(voteIndex, sideIndex)} key={sideIndex}>{item.text}</Button>
                        ))
                    }
                </Flex>
                <Text fontSize={12} mt={4} textAlign='center' > {item.displayName} tarafından oluşturuldu</Text>
            </ListItem>
        )
    }
}

export default Vote