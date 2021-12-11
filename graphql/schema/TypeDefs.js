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

  #mutution
  type Mutation {
    addUser(
      id: Int!
      first_name: String!
      last_name: String!
      email: String!
      gender: String!
    ): User!
  }
`;

module.exports = { typeDefs };
