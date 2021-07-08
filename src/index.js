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

let API_KEY =
  "mnle5EXoFYtyyMzH3dsFwpbf90dzZb8qfnVABxz6L4FA2kcP8Tj7TiWexYdU_ILiMb-I8Ll5uDenDgtKfGxF5F9YUhAOmGpzHiHrXkcomyxcpv6GCNGdIUCveEjSYHYx";

const httpLink = new HttpLink({
  uri: "https://mycorsproxybypass.herokuapp.com/https://api.yelp.com/v3/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  //const token = localStorage.getItem('auth_token');

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "accept-language": "en_US",
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const client2 = new ApolloClient({
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
    <ApolloProvider client={client2}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
