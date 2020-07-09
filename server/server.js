import express from 'express';
import GraphHTTP from 'express-graphql';
import cors from 'cors';

import Sschema from './src/schema';

// Const
const PORT = 4000;
const server = express();

// Connection with client
server.use('*', cors({ origin: 'http://localhost:3000' }));


// GraphQL
server.use('/graphql', GraphHTTP({
  schema: Sschema,
  pretty: true,
  graphiql: true
}));

// Listen
server.listen(PORT, () => 
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);
