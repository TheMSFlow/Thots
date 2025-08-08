import { gql } from '@apollo/client';

export const GET_COMMENTS_BY_POST_ID = gql`
  query GetCommentsByPostId($postId: String!) {
    commentsCollection(filter: { post_id: { eq: $postId } }) {
      edges {
        node {
          id
          post_id
          comment
        }
      }
    }
  }
`;
