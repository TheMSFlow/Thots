// src/graphql/mutations/addComment.ts
import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
  mutation AddComment($postId: String!, $comment: String!) {
    insertIntocommentsCollection(
      objects: { id: $postId, post_id: $postId, comment: $comment }
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
