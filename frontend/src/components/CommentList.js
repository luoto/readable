import React from 'react';

const export CommentList = (props) => {
  return (
    <section>
      <button>Add Comment</button>
      <ul>
        <li>What? <button>edit</button><button>delete</button></li>
        <li>That's so cute!!!! <button>edit</button><button>delete</button></li>
        <li>Reminds of the time when... <button>edit</button><button>delete</button></li>
      </ul>
    </section>
  )
}
