export interface User {
  name: string;
  username: string;
  initials: string;
}

export interface CommentNode {
  comment: string
  post_id: string
  id?: string 
  __typename: string
}

export interface CommentEdge {
  node: CommentNode
}

export interface CommentsCollection {
  edges: CommentEdge[]
}

export interface LikeNode {
    id: string
  like_amount: number
}

export interface LikeEdge {
  node: LikeNode
}

export interface LikesCollection {
  edges: LikeEdge[]
}


export interface Post {
  id: string
  post_id: string
  content: string
  hashtag?: string
  time: string
  users: User
  commentsCollection: CommentsCollection
  likesCollection: LikesCollection
}

export interface GetAllPostsData {
  postsCollection: {
    edges: { node: Post }[];
  };
}

export interface GetCommentsByPostIdData {
  commentsCollection: {
    edges: {
      node: CommentNode;
    }[];
  };
}
