import React from 'react';
import { Link } from 'react-router-dom';
import VoteScoreStepper from '../containers/VoteScoreStepper';

const CommentList = (props) => {
  return (
    <section>
      <ul className="comment-list">
        {props.comments.filter(comment => !comment.delete).map(comment => {
          return (
            <li className="comment" key={comment.id}>
              <div className="comment__vote-action">
              <span className="comment__votescore">{comment.voteScore}</span><VoteScoreStepper id={comment.id} />
              </div>
              <div className="comment__content">
                <span className="comment__author">{comment.author}</span> | <span className="comment__body">{comment.body}</span>
              </div>
              <div className="comment__actions">
                <Link className="comment__button" to={{pathname: "/comments/edit", state: {comment}}}>Edit</Link>
                <a className="comment__button" onClick={() => props.deleteComment(comment.id)}>Delete</a>
              </div>
            </li>
          )
        })}
      </ul>
      <Link className="comment__button comment__button--large" to={{pathname: "/comments/new", state: {postId: props.postId}}}>Add Comment</Link>
    </section>
  )
}

export default CommentList;
