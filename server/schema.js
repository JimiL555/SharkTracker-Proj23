const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Shark {
    id: ID!
    name: String!
    species: String!
    pingCount: Int!
    location: String!
    region: String! # Add region for filtering
    timestamp: String!
  }

  type Query {
    sharks(region: String): [Shark] # Allow filtering by region
    shark(id: ID!): Shark
  }

  type Mutation {
    addShark(
      name: String!
      species: String!
      pingCount: Int
      location: String!
      region: String!
      timestamp: String
    ): Shark
  }
`;

module.exports = typeDefs;
