import React, { useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import Comments from '../comment/Comments'

import Create from '../Create/Create'

import Vote from './Vote'

const Main = () => {
  return (
    <>
      <Grid >
        <Vote />
        <Comments />
      </Grid>
    </>
  )
}

export default Main