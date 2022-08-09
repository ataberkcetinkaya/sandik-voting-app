import React from 'react'
import { Grid, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const Main = () => {
  const { user } = useSelector(state => state.auth)

  return (
<>
      <Grid >
        <Text >
          Oturumun Açık {user.email}
        </Text>
      </Grid>
  </>


  
  )
}

export default Main