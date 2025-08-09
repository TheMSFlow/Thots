import { gql } from "@apollo/client";

export const GET_POST_BY_ID = gql`
  query GetPostById($post_id: UUID!) {
    postsCollection(filter: { post_id: { eq: $post_id } }) {
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
