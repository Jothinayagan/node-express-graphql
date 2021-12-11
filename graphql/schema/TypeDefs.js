const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: Int!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
  }

  # Query

  type Query {
    getAllUsers: [User!]!
  }
`;

module.exports = { typeDefs };
