const app = require("express")();
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./graphql/schema/TypeDefs");
const { resolvers } = require("./graphql/schema/Resolvers");

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

app.listen({ port: 3000 }, () => {
  console.log("listening to the port: 3000");
});
