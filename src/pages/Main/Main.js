import React from 'react'
import { Grid } from '@chakra-ui/react'
import { Vote, VoteResult } from '../../components/mainComponents'
import { Box, Center, List } from '@chakra-ui/react'
import { selectSide } from '../../firebase'
import { useSelector } from 'react-redux'

const Main = () => {
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
    <>
      <Grid >
        <Center maxWidth='700px' mx='auto'>
          <Box borderRadius='10'>
            <List mt={6} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
              {voteArray && voteArray.map((item, voteIndex) => (
                !item.votedUserList.includes(user.displayName) ?
                  <Vote handleClick={handleClick} voteIndex={voteIndex} key={item.id} item={item} />
                  : <VoteResult key={item.id} item={item} />
              ))}
            </List>
          </Box>
        </Center >
      </Grid>
    </>
  )
}

export default Main