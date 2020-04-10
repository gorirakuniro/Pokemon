import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonContainer } from './containers/PokemonsCountainer';
import './App.css';

function App() {
  const client = new ApolloClient({
    uri:'https://graphql-pokemon.now.sh'
  });

  return (
    <ApolloProvider client={client}>
        <PokemonContainer />
    </ApolloProvider>
  );
}

export default App;
