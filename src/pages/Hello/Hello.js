import React from 'react';
// Chakra UI
import { Button, Heading, Link } from '@chakra-ui/react';

const Hello = () => {
  return (
    <>
      <Link href='/register'>Kayıt Ol</Link>
      <Link href='/login'>Giriş Yap</Link>
    </>
  );
};

export default Hello;