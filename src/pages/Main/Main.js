import React, { useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import Comments from '../comment/Comments'
<<<<<<< HEAD
import Create from '../Create/Create'
=======
import Vote from './Vote'
>>>>>>> 1e65caf75dc73614d725071e1419c934ff4f3328

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