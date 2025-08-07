import Spacer from "./components/blocks/Spacer"
import Header from "./components/Header"
import PostCard from "./components/PostCard"

function App() {

  return (
    <>
    <Header />
    <Spacer />
      <div className="flex flex-col justify-start items-center gap-2 ">
        <PostCard />
      </div>
    </>
  )
}

export default App
