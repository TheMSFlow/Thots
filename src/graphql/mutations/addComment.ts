import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
  mutation AddComment($postId: String!, $comment: String!) {
    insertIntoCommentsCollection(objects: { post_id: $postId, comment: $comment }) {
      records {
        comment
      }
    }
  }
`;
