/* eslint-disable no-unused-vars */
const apolloLambda = require('apollo-server-lambda');

const {
  ApolloServer,
  gql,
} = apolloLambda;
// const admin = require('firebase-admin');

const resolvers = {
  Query: {
    hello: (root, args, context) => 'Hello, world!',
  },
};

const server = new ApolloServer({
  resolvers,
});

exports.handler = server.createHandler(
  {
    cors: {
      origin: '*',
      credentials: true,
    },
  },
);
