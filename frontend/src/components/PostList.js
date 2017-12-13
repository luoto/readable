import React from 'react';
import PostListItem from './PostListItem';


const PostList = (props) => {
  return (
    <ul className="post-list">
      {
        props.posts.filter(post => !post.deleted).map((post) => {
          return (
            <PostListItem
              key={post.id}
              postId={post.id}
              title={post.title}
              author={post.author}
              score={post.voteScore}
              comments={post.commentCount}
              category={post.category}
              onDelete={props.onDelete}
            />
          )
        })
      }
    </ul>
  )
}

export default PostList;
