function Reply({ currentUser }) {
  return (
    <div className="flex gap-2 rounded-lg bg-white p-4 mb-2 items-start">
      <img
        src={`avatars/image-${currentUser.username}.webp`}
        alt=""
        className="h-10 w-10"
      />
      <textarea
        className="flex-1 border resize-none p-2 placeholder:text-grayish-blue"
        rows={4}
        placeholder="Add a comment..."
      />
      <button className="py-2 px-4 rounded-lg text-white bg-moderate-blue hover:bg-opacity-30">
        REPLY
      </button>
    </div>
  );
}

export default Reply;
