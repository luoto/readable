import React from 'react';
import { connect } from 'react-redux';
import { votePost, voteComment } from '../actions';

const VoteScoreStepper = (props) => {
  if (props.postId) {
    return (
      <div className="stepper">
        <a className="stepper__button" onClick={() => props.votePost(props.postId, 'upVote')}>
          <i className="material-icons md--small">keyboard_arrow_up</i>
        </a>
        <a className="stepper__button" onClick={() => props.votePost(props.postId, 'downVote')}>
          <i className="material-icons md--small">keyboard_arrow_down</i>
        </a>
      </div>
    )
  }

  return (
    <div className="stepper">
      <a className="stepper__button" onClick={() => props.voteComment(props.id, 'upVote')}>
        <i className="material-icons">keyboard_arrow_up</i>
      </a>
      <a className="stepper__button" onClick={() => props.voteComment(props.id, 'downVote')}>
        <i className="material-icons">keyboard_arrow_down</i>
      </a>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    votePost: (id, updown) => {
      dispatch(votePost(id, updown));
    },
    voteComment: (id, updown) => {
      dispatch(voteComment(id, updown));
    }
  }
};


export default connect(null, mapDispatchToProps)(VoteScoreStepper);
