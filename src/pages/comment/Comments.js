import { Box, Button, Center, Divider, FormControl, List, ListItem, Select, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { addComment, db, update, getComments } from '../../firebase'
import { useSelector } from 'react-redux'
import Vote from '../Main/Vote'
import comment from '../../store/comment'

const Comments = () => {
  const { voteArray } = useSelector(state => state.vote);
  const { user } = useSelector(state => state.auth);
  const { comments } = useSelector(state => state.comments);

  const [commentText, setcomment] = useState('')
  const [commentArray, setCommentArray] = useState([]);
  const [voteId, setVoteId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      text: commentText,
      displayName: user.displayName
    }
    setCommentArray([...commentArray, body]);

    await addComment({
      data: commentArray,
      docId: voteId
    })
<<<<<<< HEAD
    console.log({ comment })
    setcomment (' ')
  }

  const ChangeSelector = (event) => {
    setvoteid(event.target.value);
    getComments({
      voteid: event.target.value
    })
    

    console.log(event.target.value);
=======
  }

  const changeSelector = (event) => {
    const { value } = event.target;
    const currentComments = voteArray.filter(item => item.id == value)[0].comments;
    console.log(currentComments);
>>>>>>> d0a17b0e47403ec93df95ecd830d5eddced3c619
  }

  console.log({ votes: voteArray })

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
              {comments.map((item, index) => (
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
                backgroundColor='black'
                placeholder='Lütfen Anket Seçimi Yapın'
                onChange={changeSelector}>

                {voteArray.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.head}
                  </option>
                ))}

              </Select>
            </FormControl>
            <Textarea type='text' value={commentText} onChange={e => setcomment(e.target.value)} mt={5} h={20} size='md' variant='filled' backgroundColor='black' placeholder='Yorumunuzu Giriniz..' />
          </VStack>
          <Button type='submit' onClick={handleSubmit} left='450px' mt={3} colorScheme='red' color='white' >Yorumu Gönder</Button>



        </Box>

      </SimpleGrid>
    </Center >
  )
}

export default Comments