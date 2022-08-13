import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Router
import { BrowserRouter } from 'react-router-dom';
// Chakra
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"
// Redux,
import { Provider } from 'react-redux';
import { store } from './store';

const theme = extendTheme({
  styles: {
    global: {
      '*': {
        color: 'white !important',
      },
      'body': {
        backgroundColor: 'gray.800',
        color: 'gray.50'
      },
      'input, select, option, textarea': {
        backgroundColor: 'gray.700',
        color: 'white',
        outline: 'none'
      },
      'input:hover': {
        backgroundColor: 'none'
      },
      'input::placeholder': {
        color: 'white',
        fontStyle: 'italic'
      },
      'button, option': {
        backgroundColor: 'gray.600 !important',
      },
      'button:hover': {
        opacity: '.8'
      }
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);

