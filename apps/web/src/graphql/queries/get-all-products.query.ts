import { gql } from 'apollo-angular'

const GET_ALL_PRODUCTS_GQL = gql`
  query Getproducts {
    products {
      id
      name
      price
      discountPrice
      images {
        id
        title
        img
      }
      category {
        id
        name
        description
      }
    }
  }
`

export { GET_ALL_PRODUCTS_GQL }
