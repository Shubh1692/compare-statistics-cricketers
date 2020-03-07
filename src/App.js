import React from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerComponent from './components/PlayerComponent';
import { Container } from 'react-bootstrap';
import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
});
function App() {
  return (<ApolloProvider client={client}>
    <Container>
      <PlayerComponent client={client} />
    </Container>
  </ApolloProvider>)
}
export default App;
