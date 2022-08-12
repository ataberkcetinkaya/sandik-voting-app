import { Box, Button, Center, Divider, FormControl, List, ListItem, Select, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { addComment, db, update } from '../../firebase'
import { useSelector } from 'react-redux'
import Vote from '../Main/Vote'


const Comments = () => {
  const { votes } = useSelector(state => state.votes)
  // const [votes, setVotes] = useState([{
  //   head: 'deneme',
  //   uid:'asdad'
  // }])
  const [voteid, setvoteid] = useState('')


  const [comment, setcomment] = useState('')

 

 const handleSubmit = async (e) => {
  e.preventDefault();
  await addComment({
    comment: comment,
    voteid:voteid
})
console.log({comment})
 }

 const ChangeSelector= (event)=>{
  setvoteid(event.target.value);
  console.log(event.target.value);
 }

 console.log({votes})

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
              <Select variant='filled' mt={7} placeholder='Lütfen Anket Seçimi Yapın' onChange={ChangeSelector}>
              {votes.map((votedata) => (
                
                        <option value={votedata.votingObj.id}>
                            {votedata.votingObj.head}
                        </option>
                    ))}


              
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