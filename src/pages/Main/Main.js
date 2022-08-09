import React, { useEffect } from 'react'
import { Grid, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import DisplayName from '../../components/helloComponents/DisplayName'

const Main = () => {
  const { user } = useSelector(state => state.auth)

 

  return (
<>


      <Grid >
        <Text >
          Oturumun Açık {user.DisplayName}
        </Text>
      </Grid>
      <DisplayName/>
  </>


  
  )
}

export default Main