import { useState } from "react";
import { CommentType, User } from "./Comments";

function Reply({
  currentUser,
  handleReply,
  setShowReply,
  comment,
}: {
  currentUser: User;
  handleReply: (reply: string) => void;
  setShowReply: (showReply: boolean) => void;
  comment: CommentType;
}) {
  const [message, setMesaage] = useState("");

  return (
    <div className="flex gap-2 rounded-lg bg-white p-4 mb-2 items-start">
      <img
        src={`avatars/image-${currentUser.username}.webp`}
        alt="pp"
        className="h-10 w-10"
      />
      <textarea
        className="flex-1 border resize-none p-2 placeholder:text-grayish-blue"
        rows={4}
        placeholder="Add a comment..."
        onChange={(e) => setMesaage(e.target.value)}
      />
      <button
        className="py-2 px-4 rounded-lg text-white bg-moderate-blue hover:bg-opacity-30"
        onClick={() => {
          handleReply(message, comment);
          setShowReply(false);
        }}
      >
        REPLY
      </button>
    </div>
  );
}

export default Reply;
