import Comment from "./Comment";

export type CommentType = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies: CommentType[];
  replyingTo?: string;
};

export type User = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};

function Comments({
  comments,
  currentUser,
  setComments,
}: {
  comments: CommentType[];
  currentUser: User;
  setComments: (comments: CommentType[]) => void;
}) {
  const handleReply = (reply: string, comment) => {
    const newComment: CommentType = {
      id: comments.length + 1,
      content: reply,
      createdAt: new Date().toISOString(),
      score: 0,
      user: currentUser,
      replyingTo: comment.user.username,
      replies: [],
    };
    setComments((prev) => {
      const newComments = [...prev];
      const index = newComments.findIndex((c) => c.id === comment.id);
      newComments[index].replies = [...newComments[index].replies, newComment];
      return newComments;
    });
  };

  const handleDelete = (comment) => {
    setComments((prev) => {
      return prev.filter((c) => c.id !== comment.id);
    });
  };
  return (
    <div className="flex flex-col gap-4 w-[600px]">
      {comments
        .sort((a, b) => b.score - a.score)
        .map((comment) => {
          return (
            <div key={comment.id}>
              <Comment
                comment={comment}
                currentUser={currentUser}
                setComments={setComments}
                handleReply={handleReply}
                handleDelete={handleDelete}
              />
            </div>
          );
        })}
    </div>
  );
}

export default Comments;
