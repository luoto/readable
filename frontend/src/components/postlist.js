import React from 'react';

const PostList = (props) => {
  return (
    <div>
      <ul>
        {props.posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  )
}

export default PostList;
