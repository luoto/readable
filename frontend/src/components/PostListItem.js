import React from 'react';
import VoteScoreStepper from './VoteScoreStepper';


const PostListItem = (props) => {
  return (
    <li>
      <div className="post">
        <h3>Kitten trying his best to pet gently</h3>
        <ul>
          <li>50 comments | 10 votes <VoteScoreStepper/></li>
        </ul>
      </div>
    </li>
  )
}

export default PostListItem;
