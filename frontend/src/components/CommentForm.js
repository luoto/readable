import React from 'react';
import { connect } from 'react-redux';
import { createComment, editComment } from '../actions';
import { Redirect } from 'react-router-dom';
import shortid from 'shortid';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.location.state.comment) {
      this.state = {
        ...props.location.state.comment,
        editing: true
      }
    }
     else {
       this.state = {
         author: props.author || '',
         body: props.body || '',
         postId: props.location.state.postId,
         shouldRedirect: false,
         editing: false
       }
     }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const comment = {
      id: this.state.id || shortid.generate(),
      parentId: this.state.parentId || this.state.postId,
      timestamp: this.state.timestamp || Date.now(),
      author: this.state.author,
      body: this.state.body
    }

    this.state.editing ? this.props.editComment(comment) : this.props.createComment(comment);

    this.setState({
      shouldRedirect: true
    })
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    if (this.state.shouldRedirect && !this.state.editing) {
      return <Redirect to={`/category/${this.props.location.state.postId}`} />
    }
    if (this.state.shouldRedirect && this.state.editing) {
      return <Redirect to={`/category/${this.state.parentId}`} />
    }
    return (
      <div
        className="form-container">
        <form
          className="form"
          onSubmit={this.handleSubmit}>
          <input
            className="form__input"
            type="text"
            value={this.state.author}
            onChange={this.handleChange}
            name="author"
            placeholder="Author"
          />
          <textarea
            className="form__textarea"
            placeholder="comment body"
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
          />
          <input
            className="form__button"
            type="submit"
            value={this.state.editing ? 'Edit Comment' : 'Submit Comment'}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (commentData) => {
      dispatch(createComment(commentData));
    },
    editComment: (commentData) => {
      dispatch(editComment(commentData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
