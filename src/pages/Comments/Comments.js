import { Box, Button, Center, Divider, FormControl, List, ListItem, Select, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import React, { useState, useEffect } from 'react'
import { addComment, getComments } from '../../firebase'
import { useSelector } from 'react-redux'

const Comments = () => {
  const { voteArray } = useSelector(state => state.vote);
  const { user } = useSelector(state => state.auth);
  const [comments, setComments] = useState([]);

  const [commentText, setcomment] = useState('');
  const [voteId, setVoteId] = useState('');

  const getCurrentComments = () => voteArray.filter(item => item.id == voteId)[0].comments

  useEffect(() => {
    if (voteId) {
      setComments(getCurrentComments());
    }
  }, [voteId,])

  const handleSubmit = async (e) => {
    e.preventDefault();
    let commentArray = getCurrentComments();
    const body = {
      text: commentText,
      displayName: user.displayName
    }
    commentArray = [...commentArray, body]
    await addComment(commentArray, voteId)
    setComments(commentArray);
  }

  const changeSelector = (e) => {
    setVoteId(e.target.value);
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacingX='150px'>
        <Box w={600} h={600}>
          <Text fontSize='4xl'>
            <ChatIcon color='red.500' />
            <b> Yorumlar </b>
          </Text>
          <Divider mt={2} boxShadow='red-lg' p='1' spacing='8' rounded='xl' bg='red' />
          <List mt={7} spacing={3}>
            <ListItem>
              {comments && comments.map((item, index) => (
                <Box key={index} w={250} borderRadius={5} mt={3} bg='gray.500'>
                  <Text ml={2}>{item.text}</Text>
                </Box>
              ))}
            </ListItem>
          </List>
        </Box>

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
          <Button type='submit' onClick={handleSubmit} left='450px' mt={3} colorScheme='red' color='white' >Yorumu Gönder</Button>
        </Box>

      </SimpleGrid>
    </Center >
  )
}

export default Comments