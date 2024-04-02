import Comments from "./Comments";
import CommentsData from "../data.json";
import { useState } from "react";
function App() {
  const [comments, setComments] = useState(CommentsData.comments);
  const currentUser = CommentsData.currentUser;
  return (
    <div className="min-h-dvh bg-very-light-gray flex justify-center items-center">
      <Comments
        comments={comments}
        setComments={setComments}
        currentUser={currentUser}
      />
    </div>
  );
}

export default App;
