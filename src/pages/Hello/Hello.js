import React from 'react';
// Context
import { useStateValue } from '../../context/provider';
import { actionTypes } from '../../context/reducer';
// Chakra UI
import { Button, Heading, Link } from '@chakra-ui/react';

const Hello = () => {
  // Context içerisinden değerimizi aldık
  const { state, dispatch } = useStateValue();
  return (
    <>
      <Heading>{state.text}</Heading>
      <Button colorScheme='blue' onClick={() => dispatch({ type: actionTypes.SAY_HELLO })}>Say Hello</Button>
      <Link href='/register'>Kayıt Ol</Link>
      <Link href='/login'>Giriş Yap</Link>
    </>
  );
};

export default Hello;