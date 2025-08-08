import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    postsCollection(first: 10) {
      edges {
        node {
          id
          content
          hashtag
          time
          users {
            name
            username
            initials
          }
          commentsCollection {
            edges {
              node {
                comment
              }
            }
          }
          likesCollection {
            edges {
              node {
                like_amount
              }
            }
          }
        }
      }
    }
  }
`
