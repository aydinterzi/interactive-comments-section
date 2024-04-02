import type { CommentType, User } from "./Comments";
import minusIcon from "./assets/icon-minus.svg";
import plusIcon from "./assets/icon-plus.svg";
import replyIcon from "./assets/icon-reply.svg";
import deleteIcon from "./assets/icon-delete.svg";
import editIcon from "./assets/icon-edit.svg";
import Reply from "./Reply";
import { useState } from "react";
function Comment({
  comment,
  currentUser,
  reply,
}: {
  comment: CommentType;
  currentUser: User;
  reply?: boolean;
}) {
  const [showReply, setShowReply] = useState(false);
  return (
    <>
      <div className="bg-white flex flex-row p-4 gap-4 rounded-md text-base text-grayish-blue mb-4">
        <div className="flex flex-col items-center justify-between gap-4 p-2 rounded-lg bg-very-light-gray self-start">
          <img src={plusIcon} alt="plus" />
          <p className="text-dark-blue font-bold">{comment.score}</p>
          <img src={minusIcon} alt="minus" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img
                src={`avatars/image-${comment.user.username}.webp`}
                alt="pp"
                className="h-10 w-10"
              />
              <p className="font-bold text-dark-blue">
                {comment.user.username}
              </p>
              {currentUser.username === comment.user.username && (
                <div className="bg-moderate-blue px-1 text-white text-sm">
                  you
                </div>
              )}
              <p>{comment.createdAt}</p>
            </div>
            {currentUser.username !== comment.user.username && (
              <div
                onClick={() => setShowReply((prev) => !prev)}
                className="flex items-center gap-2 font-bold cursor-pointer"
              >
                <img src={replyIcon} alt="reply" className="h-4 w-4" />
                <p className="text-moderate-blue">Reply</p>
              </div>
            )}
            {currentUser.username === comment.user.username && (
              <div className="flex items-center gap-4 font-bold">
                <div className="flex items-center gap-2">
                  <img src={deleteIcon} alt="edit" className="h-4 w-4" />
                  <p className="text-soft-red">Delete</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={editIcon} alt="edit" className="h- w-4" />
                  <p className="text-moderate-blue">Edit</p>
                </div>
              </div>
            )}
          </div>
          <p>
            <span className="font-bold text-moderate-blue">
              {reply && `@${comment.replyingTo}`}
            </span>{" "}
            {comment.content}
          </p>
        </div>
      </div>
      <div className="border-l-2 ml-7 pl-7">
        {comment.replies &&
          comment.replies.map((reply) => {
            return (
              <div key={reply.id}>
                <Comment comment={reply} currentUser={currentUser} reply />
              </div>
            );
          })}
      </div>
      {showReply && <Reply currentUser={currentUser} />}
    </>
  );
}

export default Comment;
