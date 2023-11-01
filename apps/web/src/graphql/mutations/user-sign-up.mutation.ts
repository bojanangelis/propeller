import gql from 'graphql-tag'

export const USER_SIGN_UP_GQL = gql`
  mutation SignUp($signUpInput: SignUpInput!) {
    signUp(signUpInput: $signUpInput) {
      id
      email
    }
  }
`
