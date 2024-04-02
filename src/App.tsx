import Comments from "./Comments";
import CommentsData from "../data.json";
function App() {
  const comments = CommentsData.comments;
  const currentUser = CommentsData.currentUser;
  return (
    <div className="h-dvh bg-very-light-gray flex justify-center items-center">
      <Comments comments={comments} currentUser={currentUser} />
    </div>
  );
}

export default App;
