// src/pages/PostPage.tsx
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST_BY_ID } from "../graphql/queries/getPost";
import PostCard from "../components/PostCard";
import PostCardSkeleton from "../components/PostCardSkeleton";
import Header from "../components/Header";
import Spacer from "../components/blocks/Spacer";
import Toast from "../components/blocks/Toast";
import { useEffect } from "react";
import { useApolloClient } from "@apollo/client";

const PostPage = () => {
  const client = useApolloClient();

  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useQuery(GET_POST_BY_ID, {
    variables: { post_id: id },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    return () => {
      client.cache.evict({ fieldName: "postsCollection" });
      client.cache.gc();
    };
  }, []);
  

  const post = data?.postsCollection?.edges?.[0]?.node;
  

  const handleGoBack = () => {

  }

  // if (loading) return <PostCardSkeleton />
  if (error) return <p className="flex justify-center items-center h-screen px-4 text-center">Error: {error.message}</p>;

  if (!post && !loading) return <p className="flex justify-center items-center h-screen px-4 text-center">Post not found.</p>;

  return (
    <>
      <Header />
      <Spacer />
      <div className="flex flex-col justify-start items-center gap-2 max-w-full lg:max-w-[40rem] lg:p-12 lg:bg-[#F8F8F8] lg:rounded-2xl mx-auto mb-8 lg:mb-20">
        <div className="w-full flex flex-col">
            {loading ? <PostCardSkeleton /> : <PostCard {...post} />}
        </div>
      </div>
      <Toast />
      <div className="w-full flex justify-center items-center lg:-mt-8 mb-10">
        <Link to={'/'}
        className="flex w-fit justify-center items-center bg-accent px-4 py-2 rounded-md text-white hover:text-primary hover:bg-brand active:scale-90 transition-all duration-200 ease-in-out">
          Go Home
        </Link>
      </div>
    </>
  );
}

export default PostPage
