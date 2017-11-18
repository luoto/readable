import React from 'react';

const Comment = (props) => {
  return (
    <div>
      <p>{props.comment.body}</p>
      <p>{props.comment.author}</p>
      <p>{props.comment.voteScore}</p>
    </div>
  )
}

export default Comment;
