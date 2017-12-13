import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import shortid from 'shortid';
import { createPost, editPost } from '../actions';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    let post = props.location.state ? props.location.state.post : null;

    if (post) {
      this.state = {
        post,
        ...post,
        editing: true
      }
    } else {
      this.state = {
        title: props.title || '',
        body: props.body || '',
        author: props.author || '',
        category: props.category || 'react',
        redirect: false,
        editing: false
      }
    }
  }

  componentWillMount() {

    if (this.props.editing || this.state.editing) {
      const post = this.props.posts.filter((post) => post.id === this.props.location.state.id)[0]
      this.setState({...post, redirect: false});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state, redirect: true
    });

    const post = {
      id: this.state.post ? this.state.post.id : shortid.generate(),
      timestamp: this.state.post ? this.state.post.timestamp : Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category
    }

    this.state.editing ? this.props.editPost(post) : this.props.createPost(post);

  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {

    if (this.state.redirect && this.state.editing) {
      return <Redirect to={`/category/${this.props.location.state.post.id}`} />
    }

    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    return (
      <div className="form-container">
        <form
          className="form"
          onSubmit={this.handleSubmit} >
          <input
            className="form__input"
            name="title"
            type="text"
            onChange={this.handleChange}
            value={this.state.title}
            placeholder="Title"
          />
          <textarea
            className="form__textarea"
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
            placeholder="Body"
          />
          <input
            className="form__input"
            name="author"
            onChange={this.handleChange}
            value={this.state.author}
            type="text"
            placeholder="Author"
          />
          <select
            className="form__select"
            onChange={this.handleChange}
            value={this.state.category}
            name="category"
          >
            <option className="form__option">react</option>
            <option className="form__option">udacity</option>
            <option className="form__option">redux</option>
          </select>
          <input
            className="form__button"
            type="submit"
            value={this.state.editing ? 'Edit Post' : 'Create New Post'}/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPost: (formData) => {
      dispatch(createPost(formData));
    },
    editPost: (formData) => {
      dispatch(editPost(formData));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
