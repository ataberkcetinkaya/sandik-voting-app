import { ChatIcon, LinkIcon } from '@chakra-ui/icons'
import { Box, CircularProgress, CircularProgressLabel, Link, Text } from '@chakra-ui/react'
import React from 'react'

const VoteResult = () => {
    return (
        <Box position="absolute" left={750} w="420px" h="320px" borderRadius='10' border='1px' borderColor='gray.200'>
            <Text
                fontSize='16px' mt={3} ml={5} mr={1} >
                <b>Sonraki seçimde oyunuzu hangi partiye vermeyi düşünüyorsunuz ?</b>
            </Text>
            <Box
                position="absolute"
                top="70px"
                left="19px"
                w="96px"
                h=" 42px"
                as='button' borderRadius='md' bg='gray.200' color='black' px={4}>
                Label
            </Box>
            <Box
                position="absolute"
                top="120px"
                left="19px"
                w="96px"
                h=" 42px"
                as='button' borderRadius='md' bg='gray.200' color='black' px={4}>
                Label
            </Box>
            <Box
                position="absolute"
                top="170px"
                left="19px"
                w="96px"
                h=" 42px"
                as='button' borderRadius='md' bg='gray.200' color='black' px={4} >
                Label
            </Box>
            <Box
                position="absolute"
                top="220px"
                left="19px"
                w="96px"
                h=" 42px"
                as='button' borderRadius='md' bg='gray.200' color='black' px={4}>
                Label
            </Box>
            <CircularProgress
                position="absolute"
                right="50px"
                top="220px"
                value={80}
                color='brand.theRed'
                thickness='8px'>
                <CircularProgressLabel>%</CircularProgressLabel>
            </CircularProgress>
            <CircularProgress
                position="absolute"
                right="50px"
                top="170px"
                value={80}
                color='brand.theRed'
                thickness='8px'>
                <CircularProgressLabel>%</CircularProgressLabel>
            </CircularProgress>
            <CircularProgress
                position="absolute"
                right="50px"
                top="120px"
                value={80}
                color='brand.theRed'
                thickness='8px'>
                <CircularProgressLabel>%</CircularProgressLabel>
            </CircularProgress>
            <CircularProgress
                position="absolute"
                right="50px"
                top="70px"
                value={80}
                color='brand.theRed'
                thickness='8px'>
                <CircularProgressLabel>%</CircularProgressLabel>
            </CircularProgress>
            <Text
                position="absolute"
                fontSize='12px'
                right="15px"
                bottom="10px">
                <Link color='brand.theRed'>Mert</Link>, tarafından oluşturuldu</Text>
            <Link>
                <ChatIcon position="absolute" w="22px" h="22px" left="40px"
                    bottom="10px" />
            </Link>
        </Box>
    )
}

export default VoteResult