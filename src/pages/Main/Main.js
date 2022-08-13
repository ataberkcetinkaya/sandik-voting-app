import React, { useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import Comments from '../Comments/Comments'
import { Vote, VoteResult } from '../../components/mainComponents'

const Main = () => {
  return (
    <>
      <Grid >
        <Vote />
        <VoteResult />
      </Grid>
    </>
  )
}

export default Main