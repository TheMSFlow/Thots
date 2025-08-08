import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
  mutation AddComment($postId: String!, $comment: String!) {
    insertIntocommentsCollection(
      objects: { post_id: $postId, comment: $comment }
    ) {
      affectedCount
      records {
        id
        post_id
        comment
      }
    }
  }
`;
