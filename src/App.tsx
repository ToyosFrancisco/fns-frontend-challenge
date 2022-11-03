import React from "react";

// UI
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "rsuite/dist/styles/rsuite-default.css";


// components
import { Home, Layout } from "./components";



function App() {
  return (
   
      <ChakraProvider
        theme={extendTheme({
          styles: {
            global: {
              body: {
                fontFamily: "effra",
              },
            },
          },
        })}
      >
        <Layout>
          <Home />
        </Layout>
      </ChakraProvider>
   
  );
}

export default App;
