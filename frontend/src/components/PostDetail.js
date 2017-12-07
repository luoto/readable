import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import VoteScoreStepper from '../containers/VoteScoreStepper';
import CommentList from './CommentList';
import { deleteComment, deletePost, getComments, editComment, getPost } from '../actions';

class PostDetail extends React.Component {
  componentDidMount() {
    let postId = this.props.location.pathname.split('/').pop();
    this.props.getPost(postId);
    this.props.getComments(postId);
  }

  onPostDelete = (id) => {
    this.props.deletePost(this.props.post.id);
  }

  render() {
    if (this.props.error) {
      return (<h1>post does not exist</h1>)
    }

    if (!this.props.post) {
      return (<h1>Loading...</h1>)
    }

    if (this.props.post.deleted) {
        return <Redirect to="/" />
    }

    return (
      <div className="post-detail-wrapper">
        <div className="post-detail">
          <h2 className="post-detail__title">{this.props.post.title}</h2>
          <p className="post-detail__author">submitted by: {this.props.post.author}</p>
          <p className="post-detail__body">{this.props.post.body}</p>
          <div className="post-detail__actions">
            <span className="post-detail__votescore">{this.props.post.voteScore}</span>
            <VoteScoreStepper postId={this.props.post.id} />
            <Link to={{pathname: "/posts/edit", state: {post: this.props.post}}} className="post-detail__button">
              Edit
            </Link>
            <Link to={{pathname: "/", state: {id: this.props.post.id}}} className="post-detail__button" onClick={() => this.onPostDelete(this.props.post.id)}>
              Delete
            </Link>
          </div>
        </div>
        <div className="comment-list-wrapper">
          <CommentList
            postId={this.props.post.id}
            comments={this.props.comments}
            editComment={this.props.editComment}
            deleteComment={this.props.deleteComment}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments,
    post: state.posts.filter(post => post.id === ownProps.match.params.id)[0],
    error: state.posts.length > 0 && state.posts[0].error,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
    deleteComment: (id) => {
      dispatch(deleteComment(id));
    },
    editComment: (comment) => {
      dispatch(editComment(comment));
    },
    getComments: (postId) => {
      dispatch(getComments(postId));
    },
    getPost: (id) => {
      dispatch(getPost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
