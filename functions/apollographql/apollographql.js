const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    message: String
    user: User
  }
  type User {
    name: String
    age: Int
  }
`;

const resolvers = {
  Query: {
    message: (parent, args, context) => {
      return "venom hey bulls !";
    },
    user: () => {
      return {
        name: "Wajahat Abbas ",
        age: 23,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

exports.handler = server.createHandler();
