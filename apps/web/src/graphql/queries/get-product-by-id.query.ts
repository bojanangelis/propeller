import { gql } from 'apollo-angular'

const GET_PRODUCT_BY_ID = gql`
  query GetProduct($where: ProductWhereUniqueInput!) {
    product(where: $where) {
      price
      name
      id
      category {
        id
        description
      }
      images {
        id
        img
      }
    }
  }
`

export { GET_PRODUCT_BY_ID }
