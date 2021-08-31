import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './data/schema';

const GRAPHQL_PORT = 8081;

const cors = require('cors');

// GraphQL server
const graphQLServer = express();
graphQLServer.use(
  '/',
  cors(),
  graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: true,
  }),
);
graphQLServer.listen(GRAPHQL_PORT, 'localhost', () =>
  console.log(`GraphQL server on localhost:${GRAPHQL_PORT}`),
);
