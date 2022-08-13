import React, { useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import Comments from '../comment/Comments'

const Main = () => {
  return (
    <>
      <Grid >
        <Comments />
      </Grid>
    </>
  )
}

export default Main