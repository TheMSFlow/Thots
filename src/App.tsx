import { useEffect, useRef } from "react"
import Spacer from "./components/blocks/Spacer"
import Header from "./components/Header"
import PostCard from "./components/PostCard"
import { useQuery } from '@apollo/client'
import { GET_ALL_POSTS } from "./graphql/queries/getPosts"
import { Post } from "./interfaces/posts"
import PostCardSkeleton from "./components/PostCardSkeleton"
import Toast from "./components/blocks/Toast"
import { useInView } from "react-intersection-observer"
import { Link, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/"

  const { ref, inView } = useInView({ threshold: 0.5 });
  const { data, loading, error, fetchMore } = useQuery(GET_ALL_POSTS, {
    variables: { first: 3 },
    notifyOnNetworkStatusChange: true,
  });

  const posts: Post[] = data?.postsCollection?.edges.map((edge: any) => edge.node) || []

  const pageInfo = data?.postsCollection?.pageInfo;

  // Throttle control
  const fetchingRef = useRef(false);
  const lastFetchTime = useRef(0);

  // Load more when bottom is in view
  useEffect(() => {
  if (inView && pageInfo?.hasNextPage && !loading) {
    if (loading) return;
    const now = Date.now();

    if (fetchingRef.current || now - lastFetchTime.current < 500) return;

    fetchingRef.current = true;
    lastFetchTime.current = now;

    fetchMore({
      variables: {
        first: 3,
        after: pageInfo.endCursor,
      },
    }).finally(() => {
      fetchingRef.current = false;
    });
  }
}, [inView, pageInfo, loading, fetchMore]);


   if (error) {
    console.error('GraphQL error:', error.graphQLErrors)
    console.error('Network error:', error.networkError)
    return (
      <p className="flex justify-center items-center h-screen px-4 text-center">Error: {error.message}</p>
    );
  }

  return (
    <>
    <Header />
    <Spacer />
      <div className="flex flex-col justify-start items-center gap-2 max-w-full lg:max-w-[40rem] lg:p-12 lg:bg-[#F8F8F8] lg:rounded-2xl mx-auto mb-8 lg:mb-20">
        <div className="w-full flex flex-col gap-8">
          {posts.map((post) =>
            isHomePage ? (
              <Link
                key={post.post_id}
                to={`/post/${post.post_id}`}
                className="block"
              >
                <PostCard {...post} />
              </Link>
            ) : (
              <PostCard key={post.post_id} {...post} />
            )
          )}

          {/* Loader skeleton while fetching */}
          {loading &&
            Array.from({ length: 3 }).map((_, i) => (
              <PostCardSkeleton key={i} />
            ))}

          {/* Invisible trigger for infinite scroll */}
          <div ref={ref} className="h-8"></div>
        </div>
      </div>
      <Toast />
    </>
  )
}

export default App
