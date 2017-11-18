import React from 'react';

class CommentForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Author"/>
        <textarea placeholder="comment body"></textarea>
        <button>Submit comment</button>
      </form>
    )
  }
}

export default CommentForm;
