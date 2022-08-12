import React, { useEffect, useState } from 'react'
import {
  Container,
  Heading,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Box,
  RadioGroup,
  HStack,
  Radio,
  Select
} from '@chakra-ui/react';
import { uuidv4 } from '@firebase/util';

const Create = () => {
  // Oylama objemiz
  const [votingObj, setVotingObj] = useState({
    id: uuidv4,
    head: '',
    sideCount: 2,
    sidesArray: new Array(2).fill('')
  });

  useEffect(() => {
    console.log(votingObj);
  }, [votingObj.sideCount]);

  // Başlığı Değiştirir
  const changeHead = (e) => {
    const newHead = e.target.value;
    setVotingObj({ ...votingObj, head: newHead })
  }

  // Taraf miktarı değişkeninin dinamik olarak değişmesini sağlar.
  const changeSideCount = (e) => {
    const newCount = Number(e.target.value);
    const newArr = new Array(newCount).fill('dfvdfv');

    setVotingObj({ ...votingObj, sideCount: newCount, sidesArray: newArr })
  }

  return (
    <Container>
      <Heading>Sende Bir Oylama Oluştur</Heading>
      <FormControl as='fieldset'>
        <FormLabel as='legend'>Oylama Başlığı</FormLabel>
        <Input type="text" onChange={changeHead} placeholder='Örn: Yerel seçimlerde kime oy vermeyi düşnüyorsunuz ?' />
        <FormHelperText>Oylama başlığı aynı zamanda sizin ana temanızdır.</FormHelperText>

        <FormLabel as='legend'>Taraf Sayısı</FormLabel>
        <Select onChange={changeSideCount} >
          <option selected value='2'>2 Taraf</option>
          <option value='3'>3 Taraf</option>
          <option value='4'>4 Taraf</option>
        </Select>
        <FormHelperText>Oylamanın sağlıklı ilerlemesi için en fazla 4 adet taraf seçebilirsiniz</FormHelperText>

        <Box>
          {
            new Array(4).fill('').map((side, index) => {
              <h1>{side}</h1>
            })
          }
        </Box>
      </FormControl>
    </Container>
  )
}

export default Create