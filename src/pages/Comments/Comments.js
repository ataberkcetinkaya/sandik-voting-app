import React, { useState, useEffect } from 'react'
import { Center, SimpleGrid } from '@chakra-ui/react'
import { addComment } from '../../firebase'
import { useSelector } from 'react-redux'
import { CommentAdd, CommentsList } from '../../components/commentsComponets'

const Comments = () => {
  const { voteArray } = useSelector(state => state.vote);
  const { user } = useSelector(state => state.auth);
  const [comments, setComments] = useState([]);
  const [voteId, setVoteId] = useState('');

  const getCurrentComments = () => voteArray.filter(item => item.id == voteId)[0].comments

  useEffect(() => {
    if (voteId) {
      setComments(getCurrentComments());
    }
  }, [voteId])

  const handleSubmit = async (e, commentText) => {
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
        <CommentsList comments={comments} />
        <CommentAdd voteArray={voteArray} handleSubmit={handleSubmit} changeSelector={changeSelector} />
      </SimpleGrid>
    </Center >
  )
}

export default Comments