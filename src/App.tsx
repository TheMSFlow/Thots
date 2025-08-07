import Collapse from "./components/buttons/Collapse"
import Comment from "./components/buttons/comment"
import Expand from "./components/buttons/Expand"
import Likes from "./components/buttons/likes"
import Send from "./components/buttons/Send"
import Share from "./components/buttons/Share"

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 h-screen">
        <h1 className="text-brand text-3xl">Thots</h1>
        <div className="flex flex-row gap-4"> 
          <Comment />
          <Likes />
          <Share />
          <Expand />
          <Collapse />
        </div>
        <Send />
      </div>
    </>
  )
}

export default App
