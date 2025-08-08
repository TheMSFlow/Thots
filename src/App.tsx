import Spacer from "./components/blocks/Spacer"
import Header from "./components/Header"
import PostCard from "./components/PostCard"
import { useQuery } from '@apollo/client'
import { GET_ALL_POSTS } from "./graphql/queries/getPosts"
import { Post } from "./interfaces/posts"
import PostCardSkeleton from "./components/PostCardSkeleton"
import { Toaster } from "react-hot-toast"

function App() {
  const { data, loading, error } = useQuery(GET_ALL_POSTS)

  if (error) {
  console.error('GraphQL error:', error.graphQLErrors)
  console.error('Network error:', error.networkError)
  return <p className="flex justify-center items-center h-screen px-4 text-center">Error: {error.message}</p>
}


  const posts: Post[] = data?.postsCollection?.edges.map((edge: any) => edge.node) || []

  return (
    <>
    <Header />
    <Spacer />
      <div className="flex flex-col justify-start items-center gap-2 max-w-full lg:max-w-[40rem] lg:p-12 lg:bg-[#F8F8F8] lg:rounded-2xl mx-auto mb-8 lg:mb-20">
        <div className="w-full flex flex-col gap-8">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <PostCardSkeleton key={i} />)
            : posts.map((post) => <PostCard key={post.post_id} {...post} />)
          }

        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App
