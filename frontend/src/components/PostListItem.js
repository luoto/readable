import React from 'react';
import { Link } from 'react-router-dom';
import VoteScoreStepper from '../containers/VoteScoreStepper';

const PostListItem = (props) => {
  return (
    <li>
      <div className="post">
        <span className="post__label">{props.category}</span>
        <Link to={{pathname: `/category/${props.postId}`}}>
          <h3 className="post__title">{props.title}</h3>
        </Link>
        <p className="post__author">{props.author}</p>
        <ul className="post__actions">
          <li className="post__action-item">
            <i className="material-icons">comment</i>{props.comments}
          </li>
          <li className="post__action-item">
            <VoteScoreStepper postId={props.postId} />
          </li>
          <li className="post__action-item">
            <i className="material-icons md--red">favorite</i>{props.score}
          </li>
          <li className="post__action-item">
            <a className="post__action-button" onClick={() => props.onDelete(props.postId)}>
              Delete
            </a>
          </li>
          <li className="post__action-item">
            <Link to={{pathname: "/posts/edit", state: {post: {id: props.postId, editing: true}, id: props.postId, editing: true}}} className="post__action-button">
              Edit
            </Link>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default PostListItem;
