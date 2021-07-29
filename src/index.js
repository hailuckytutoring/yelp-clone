import React from "react";
import ReactDOM from "react-dom";
import App from "././App";
import reportWebVitals from "./reportWebVitals";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://mycorsproxybypass.herokuapp.com/https://api.yelp.com/v3/graphql",
  headers: {
    Authorization:
      "Bearer mnle5EXoFYtyyMzH3dsFwpbf90dzZb8qfnVABxz6L4FA2kcP8Tj7TiWexYdU_ILiMb-I8Ll5uDenDgtKfGxF5F9YUhAOmGpzHiHrXkcomyxcpv6GCNGdIUCveEjSYHYx ",
    "Accept-Language": "en-US",
  },

  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
