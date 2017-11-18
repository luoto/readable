import React from 'react';

class PostForm extends React.Component {
  render() {
    return (
      <form>
        <input name="title" type="text" placeholder="Title"></input>
        <textarea name="body" placeholder="Body"></textarea>
        <input name="author" type="text" placeholder="Author"></input>
      </form>
    )
  }
}

export default PostForm;
