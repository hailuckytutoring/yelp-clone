import Home from "./Screens/Home";
import GlobalStyles from "./GlobalStyles";
import { ChakraProvider } from "@chakra-ui/react";
import MainProvider from "./Context/MainProvider";

function App() {
  return (
    <MainProvider>
      <>
        <ChakraProvider>
          <Home />
          <GlobalStyles />
        </ChakraProvider>
      </>
    </MainProvider>
  );
}

export default App;
