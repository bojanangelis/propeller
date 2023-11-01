import { gql } from 'apollo-angular'

const USER_LOGIN_GQL = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      id
      name
      email
    }
  }
`

export { USER_LOGIN_GQL }
