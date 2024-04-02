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
}: {
  comments: CommentType[];
  currentUser: User;
}) {
  return (
    <div className="flex flex-col gap-4 w-[600px]">
      {comments
        .sort((a, b) => b.score - a.score)
        .map((comment) => {
          return (
            <div key={comment.id}>
              <Comment comment={comment} currentUser={currentUser} />
            </div>
          );
        })}
    </div>
  );
}

export default Comments;
