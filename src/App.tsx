import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Home, Layout } from './components';

function App() {
  return (
    <ChakraProvider theme={extendTheme({
      styles: {
        global: {
          body: {
            fontFamily: 'effra'
          }
        }
      }
    })}>
      <Layout>
        <Home />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
