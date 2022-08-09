import React, { useEffect } from 'react'
import { Grid, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const Main = () => {
  const { user } = useSelector(state => state.auth)

 

  return (
<>


      <Grid >
        <Text >
          Oturumun Açık {user.displayName}
        </Text>
      </Grid>
  </>


  
  )
}

export default Main