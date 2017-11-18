import React from 'react';
import PostLIstItem from './PostListItem';

const PostList = (props) => {
  return (
    <section>
      <h2>Posts</h2>
      <ul className="postList">
        <PostLIstItem />
        <PostLIstItem />
        <PostLIstItem />
      </ul>
    </section>
  )
}

export default PostList;
