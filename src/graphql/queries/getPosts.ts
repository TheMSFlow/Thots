import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
  query GetAllPosts($first: Int!, $after: Cursor) {
    postsCollection(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          post_id
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
                id
                like_amount
              }
            }
          }
        }
      }
    }
  }
`;
