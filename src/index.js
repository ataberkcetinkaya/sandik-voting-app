import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Router
import { BrowserRouter } from 'react-router-dom';
// Context
import Provider from './context/provider';
// Chakra
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
      brand: {
        grayBlack: "#333333",
        theRed: "#CE1B31"
      },
    },
  })

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider >
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </Provider>
);

