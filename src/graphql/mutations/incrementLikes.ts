import { gql } from '@apollo/client'

export const UPDATE_LIKE_AMOUNT = gql`
  mutation UpdateLikeAmount($id: UUID!, $like_amount: Int!) {
    updatelikesCollection(
      filter: { id: { eq: $id } }
      set: { like_amount: $like_amount }
    ) {
      records {
        id
        like_amount
      }
    }
  }
`
