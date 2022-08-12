import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
  Select,
  Button
} from '@chakra-ui/react';
import { addVote } from '../../firebase';

const Create = () => {

  const { user } = useSelector(state => state.auth)

  // Oylama objemiz
  const [votingObj, setVotingObj] = useState({
    uid: user.uid,
    displayName: user.displayName,
    head: '',
    sideCount: 2,
    sidesArray: new Array(2).fill(''),
    comments: []
  });

  // Başlığı Değiştirir
  const changeHead = (e) => {
    const newHead = e.target.value;
    setVotingObj({ ...votingObj, head: newHead })
  }

  // Taraf miktarı değişkeninin dinamik olarak değişmesini sağlar.
  const changeSideCount = (e) => {
    const newCount = Number(e.target.value);
    const newArr = new Array(newCount).fill('');
    setVotingObj({ ...votingObj, sideCount: newCount, sidesArray: newArr })
  }

  const changeSideText = (e, index) => {
    const newArr = [...votingObj.sidesArray];
    newArr[index] = e.target.value;
    setVotingObj({ ...votingObj, sidesArray: newArr })
  }

  // Form gönderileceği zaman çalışır
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addVote({ votingObj });
    console.log(votingObj);
  }

  return (
    <Container p='9' backgroundColor='gray.700' borderRadius='10'>
      <Heading>Sende Bir Oylama Oluştur</Heading>
      <FormControl as='fieldset'>
        <form onSubmit={handleSubmit}>
          <FormLabel as='legend'>Oylama Başlığı</FormLabel>
          <Input type="text" border='2px' onChange={changeHead} placeholder='Örn: Yerel seçimlerde kime oy vermeyi düşnüyorsunuz ?' />
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
              votingObj.sidesArray.map((item, index) => (
                <Input
                  mt='3'
                  key={index}
                  value={votingObj.sidesArray[index]}
                  onChange={(e) => changeSideText(e, index)}
                  placeholder={`${index + 1}. Yanıt`}
                  required />
              ))
            }
          </Box>
          <Button type='submit' width='100%' mt='3' _hover={{ opacity: '.8' }}>Yayınla</Button>
        </form>
      </FormControl>
    </Container>
  )
}

export default Create