import { gql } from 'apollo-angular';

const GET_ALL_USERS_GQL = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;

export { GET_ALL_USERS_GQL };
