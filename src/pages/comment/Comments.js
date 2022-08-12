import { Box, Button, Center, Divider, FormControl, List, ListItem, Select, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { addComment, db, update } from '../../firebase'
import { useSelector } from 'react-redux'
import Vote from '../Main/Vote'


const Comments = () => {
  
  const { user } = useSelector(state => state.auth)
  const { votes } = useSelector(state => state.votes)
  const [vote] = useState({
    votes
  })
  
  const [comment, setcomment] = useState({
    comments: ' '
  })

 

 const handleSubmit = async (e) => {
  e.preventDefault();
  await addComment({
    comment: " "
})
console.log({comment})
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
              <Box w={250} borderRadius={5} bg='gray.500'> <Text ml={2}>asdasdas</Text></Box>
            </ListItem>
          </List>
        </Box>
        <Box w={600} h={600}>
          <VStack>
            <Text  fontSize='4xl'> <b> Anket Yorumları </b></Text>
            <Divider  boxShadow='red-lg' p='1' spacing='8' rounded='xl' bg='red' />
            <FormControl>
              <Select variant='filled' mt={7} placeholder='Lütfen Anket Seçimi Yapın'>
              <option>
              {votes.map((votes) => (
                        <ListItem key={vote.id}>
                           <List> {votes.vote}</List>
                        </ListItem>
                    ))}
                </option>
                  </Select>
            </FormControl>
            <Textarea type='text' value={comment} onChange={e => setcomment(e.target.value)} mt={5} h={20} size='md' variant='filled' placeholder='Yorumunuzu Giriniz..' />
          </VStack>
          <Button type='submit' onClick={handleSubmit} left='450px' mt={3} colorScheme='red' color='white' >Yorumu Gönder</Button>
         
            
        
        </Box>

      </SimpleGrid>
    </Center >
  )
}

export default Comments