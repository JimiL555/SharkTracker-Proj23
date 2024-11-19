import { gql } from '@apollo/client';

// Login mutation
export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

// Signup mutation
export const SIGNUP_USER = gql`
  mutation signup($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

// Add Shark mutation
export const ADD_SHARK = gql`
  mutation addShark(
    $name: String!
    $species: String!
    $pingCount: Int
    $location: String!
    $region: String!
    $timestamp: String
  ) {
    addShark(
      name: $name
      species: $species
      pingCount: $pingCount
      location: $location
      region: $region
      timestamp: $timestamp
    ) {
      id
      name
      species
      location
      region
      timestamp
    }
  }
`;
