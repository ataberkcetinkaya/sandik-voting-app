import React, { useState } from 'react';
import { Box, Button, Divider, FormControl, Select, Text, Textarea, VStack } from '@chakra-ui/react'

const CommentAdd = ({ changeSelector, handleSubmit, voteArray }) => {

    const [commentText, setcomment] = useState('');

    return (
        <Box w={600} h={600}>
            <VStack>
                <Text fontSize='4xl'> <b> Anket Yorumları </b></Text>
                <Divider boxShadow='red-lg' p='1' spacing='8' rounded='xl' bg='red' />
                <FormControl>
                    <Select
                        variant='filled' mt={7}
                        backgroundColor='gray.700'
                        _hover={{ background: 'gray.700' }}
                        placeholder='Lütfen Anket Seçimi Yapın'
                        onChange={changeSelector}>

                        {voteArray.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.head}
                            </option>
                        ))}

                    </Select>
                </FormControl>
                <Textarea
                    type='text'
                    value={commentText}
                    onChange={e => setcomment(e.target.value)}
                    mt={5}
                    h={20}
                    size='md'
                    variant='filled'
                    backgroundColor='gray.700'
                    _focus={{ background: 'gray.700' }}
                    _hover={{ background: 'gray.700' }} placeholder='Yorumunuzu Giriniz..' />
            </VStack>
            <Button type='submit' onClick={(e) => handleSubmit(e, commentText)} left='450px' mt={3} colorScheme='red' color='white' >Yorumu Gönder</Button>
        </Box>
    )
}

export default CommentAdd