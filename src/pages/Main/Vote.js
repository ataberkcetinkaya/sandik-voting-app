import { Box, Button, ButtonGroup, Center, Flex, Input, Link, List, ListItem, MenuList, OrderedList } from '@chakra-ui/react'
import { addVote, getAuth, deleteVote } from '../../firebase'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Vote = () => {

    
    const [vote, setVote] = useState('')
    const [answer1, setanswer1] = useState('')
    const [answer2, setanswer2] = useState('')
    const [answer3, setanswer3] = useState('')
    const [answer4, setanswer4] = useState('')
    const { user } = useSelector(state => state.auth)
    const { votes } = useSelector(state => state.votes)

    const submitHandle = async e => {
        e.preventDefault()
        await addVote({
            vote,
            answer1,
            answer2,
            answer3,
            answer4,
            uid: user.uid,
            displayName: user.displayName
        })
        setVote('')
        setanswer1('')
        setanswer2('')
        setanswer3('')
        setanswer4('')
    }

    const handleDelete = async id => {
        await deleteVote(id)

    }
    return (


        <Center>
            <Box bg='white' border='1px' borderColor='gray.400' borderRadius='10' color='black' >
                <form >
                    <Input type='text' placeholder='Anket Bilgisi' fontSize='md' p={1} value={vote} onChange={e => setVote(e.target.value)} />
                    <Input type='text' placeholder='Seçenek 1' fontSize='md' p={1} value={answer1} onChange={e => setanswer1(e.target.value)} />
                    <Input type='text' placeholder='Seçenek 2' fontSize='md' p={1} value={answer2} onChange={e => setanswer2(e.target.value)} />
                    <Input type='text' placeholder='Seçenek 3' fontSize='md' p={1} value={answer3} onChange={e => setanswer3(e.target.value)} />
                    <Input type='text' placeholder='Seçenek 4' fontSize='md' p={1} value={answer4} onChange={e => setanswer4(e.target.value)} />
                    <Button onClick={submitHandle} disabled={!vote} colorScheme='red' color='white' size='md' fontWeight='bold'>Anket Ekle</Button>
                </form>
                <List>
                    {votes.map((votes) => (
                        <ListItem key={vote.id}>
                            {votes.vote} <Button>{votes.displayName}</Button>
                            <List>
                                
                                <Button>{votes.answer1}</Button>
                                <Button>{votes.answer2}</Button>
                                <Button>{votes.answer3}</Button>
                                <Button>{votes.answer4}</Button>
                                <Button onClick={() => handleDelete(vote.id)}>Sil</Button>
                            </List>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Center>




    )
}

export default Vote