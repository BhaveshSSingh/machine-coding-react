import React from "react";
import Comment from "./Comment";
import { comments } from "./config";

const renderCommentSection = (comments) =>
  comments.map((comment) => (
    <>
      <Comment name={comment.name} comment={comment} />
      <div className="ml-5 border border-red-800">
        {comment.replies && renderCommentSection(comment.replies)}
      </div>
    </>
  ));

const NestedComments = () => {
  return <div>{renderCommentSection(comments)}</div>;
};

export default NestedComments;
