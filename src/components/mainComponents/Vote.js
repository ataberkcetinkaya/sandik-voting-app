import { Box, Button, Center, Flex, HStack, Input, List, ListItem, Text } from '@chakra-ui/react'
import { addVote, deleteVote, selectSide } from '../../firebase'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Vote = () => {
    const { user } = useSelector(state => state.auth)
    const { voteArray } = useSelector(state => state.vote)

    const cloneVote = () => {
        let deepClone = JSON.parse(JSON.stringify(voteArray));
        deepClone.defaultForm = true;
        return deepClone;
    }

    const handleClick = async (voteIndex, sideIndex) => {
        let newArr = cloneVote();
        let currentVote = newArr[voteIndex];

        currentVote.totalCount++;
        currentVote.sidesArray[sideIndex].count++;

        currentVote.sidesArray.forEach((item, index) => {
            item.result = ((item.count / currentVote.totalCount) * 100).toFixed(1);
        });

        if (!currentVote.votedUserList.includes(user.displayName)) {
            currentVote.votedUserList.push(user.displayName);
        }

        await selectSide(currentVote);
    }

    return (
        <Center maxWidth='700px' mx='auto'>
            <Box borderRadius='10' backgroundColor='gray.700'>
                <List mt={6} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    {voteArray.map((item, voteIndex) => (
                        <ListItem width='100%' p={4} key={voteIndex} mb={15} >
                            <Flex alignItems='center' mt={3} mb={8} justifyContent='space-between'>
                                <Box flex='3'>
                                    <Text fontSize={19} fontStyle='italic' fontWeight='bold'>{item.head} </Text>
                                </Box>
                            </Flex>
                            <Flex justifyContent='space-between'>
                                {
                                    item.sidesArray.map((item, sideIndex) => (
                                        <Button onClick={() => handleClick(voteIndex, sideIndex)} key={sideIndex}>{item.text}</Button>
                                    ))
                                }
                            </Flex>
                            <Text fontSize={12} mt={4} textAlign='center' >{item.displayName} tarafından oluşturuldu</Text>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Center >

    )
}

export default Vote