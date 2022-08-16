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
  Select,
  Button
} from '@chakra-ui/react';
import { addVote } from '../../firebase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const Create = () => {
  const { user } = useSelector(state => state.auth)
  const navigate = useNavigate();

  const sideTemp = {
    count: 0,
    result: 0,
    text: ''
  }

  // Oylama objemiz
  const [votingObj, setVotingObj] = useState({
    uid: user.uid,
    displayName: user.displayName,
    head: '',
    totalCount: 0,
    sideCount: 2,
    sidesArray: [],
    votedUserList: [],
    comments: []
  });

  useEffect(() => {
    const newArr = [];
    for (let i = 0; i < votingObj.sideCount; i++) {
      newArr.push({ ...sideTemp })
    }
    setVotingObj({ ...votingObj, sidesArray: newArr })
  }, [])

  // Başlığı Değiştirir
  const changeHead = (e) => {
    const newHead = e.target.value;
    setVotingObj({ ...votingObj, head: newHead })
  }

  // Taraf miktarı değişkeninin dinamik olarak değişmesini sağlar.
  const changeSideCount = (e) => {
    const newCount = Number(e.target.value);
    const newArr = [];
    for (let i = 0; i < newCount; i++) {
      newArr.push({ ...sideTemp })
    }
    // const newArr = new Array(newCount).fill({ ...sideTemp });
    setVotingObj({ ...votingObj, sideCount: newCount, sidesArray: newArr })
  }

  // Seçenek yazısının değiştirilmesini sağlar
  const changeSideText = (e, index) => {
    const newArr = [...votingObj.sidesArray];
    newArr[index].text = e.target.value;
    setVotingObj({ ...votingObj, sidesArray: newArr })
  }

  // Form gönderileceği zaman çalışır
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addVote({ ...votingObj });
    toast.success('Başarıyla bir oylama oluşturdun');
    navigate('/main');
  }

  const { t } = useTranslation();

  return (
    <Container p='9' backgroundColor='gray.700' borderRadius='10'>
      <Heading>{t('userCreatePoolText')}</Heading>
      <FormControl as='fieldset'>
        <form onSubmit={handleSubmit}>
          <FormLabel as='legend'>{t('pollTitle')}</FormLabel>
          <Input required type="text" border='2px' onChange={changeHead} placeholder={t('pollExampleTitle')}/>
          <FormHelperText mb={2}>{t('pollTitleInfo')}</FormHelperText>

          <FormLabel as='legend'>{t('numberOfSides')}</FormLabel>
          <Select onChange={changeSideCount} >
            <option selected value='2'>{t('two')}</option>
            <option value='3'>{t('three')}</option>
            <option value='4'>{t('four')}</option>
          </Select>
          <FormHelperText>{t('pollProgressInfo')}</FormHelperText>

          <Box>
            {
              votingObj.sidesArray.map((item, index) => (
                <Input
                  mt='3'
                  key={index}
                  value={votingObj.sidesArray[index].text}
                  onChange={(e) => changeSideText(e, index)}
                  placeholder={ `${t('firstAnswer')} ${index + 1}`}
                  required/>
              ))
            }
          </Box>
          <Button backgroundColor='red.600 !important' type='submit' width='100%' mt='3' _hover={{ opacity: '.8' }}>{t('publishPollButton')}</Button>
        </form>
      </FormControl>
    </Container>
  )
}

export default Create