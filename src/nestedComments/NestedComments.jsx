import React, { useState } from "react";
import Comment from "./Comment";
import { comments } from "./config";

const renderCommentSection = (comments) => {
  const [hide, setHide] = useState("");
  //   const [show, setShow] = useState("hidden");
  const hideReplies = () => {
    setHide("hidden");
  };

  return comments.map((comment) => (
    <>
      <Comment name={comment.name} comment={comment} />
      <div className={`${hide}  ml-5 border border-red-800`}>
        <button
          onClick={hideReplies}
          className=" m-2 bg-green-400 p-2 rounded-lg"
        >
          hide
        </button>
        {comment.replies && renderCommentSection(comment.replies)}
      </div>
    </>
  ));
};

const NestedComments = () => {
  return <div>{renderCommentSection(comments)}</div>;
};

export default NestedComments;
