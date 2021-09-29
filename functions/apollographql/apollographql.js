const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    message: String
  }
`;

const resolvers = {
  Query: {
    message: (parent, args, context) => {
      return "Hello from WAJAHAT ABBAS ZAIDI !";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

const handler = server.createHandler();

module.exports = { handler };
