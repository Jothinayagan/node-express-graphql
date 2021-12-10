const app = require("express")();

const { ApolloServer } = require("apollo-server-express");

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: 3000 }, () => {
  console.log("listening to the port: 3000");
});
