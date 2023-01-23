const Comment = ({ comment, name }) => {
  //   console.log(comment);

  return (
    <div className="mt-2 p-2 border border-gray-500 rounded-xl">
      <div className="bg-blue-100">
        <h2 className="text-green-800 text-2xl">{name.substring(0, 5)}</h2>
        <h3 className="p-1">{comment?.body}</h3>
      </div>
    </div>
  );
};

export default Comment;
