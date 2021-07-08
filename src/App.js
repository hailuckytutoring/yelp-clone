import Home from "./Screens/Home";
import GlobalStyles from "./GlobalStyles";
import { ChakraProvider } from "@chakra-ui/react";
import MainProvider from "./Context/MainProvider";

// import { GraphQLClient, gql } from "graphql-request";

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

// let API_KEY =
//   "mnle5EXoFYtyyMzH3dsFwpbf90dzZb8qfnVABxz6L4FA2kcP8Tj7TiWexYdU_ILiMb-I8Ll5uDenDgtKfGxF5F9YUhAOmGpzHiHrXkcomyxcpv6GCNGdIUCveEjSYHYx";
// let endpoint =
//   "https://mycorsproxybypass.herokuapp.com/https://api.yelp.com/v3/graphql";

// const GET_REVIEWS = gql`
//   query {
//     reviews(business: "kdkkdkdk") {
//       total
//       review {
//         text
//       }
//     }
//   }
// `;

// const client = new GraphQLClient(endpoint, {
//   headers: {
//     Authorization: `Bearer ${API_KEY}`,
//     "Content-Type": "application/json",
//     "accept-language": "en_US",
//   },
// });



