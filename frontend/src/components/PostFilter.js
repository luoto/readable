import React from 'react';

const PostFilter = (props) => {
  return (
    <div>
      <span className="sort-label">Sort by:</span>
      <ul className='sort-filter'>
        <li className="sort-filter__button">
          <a
            className="sort-filter__text--white"
            onClick={() => props.onSelectFilter('votescore')}>
            votescore
          </a>
        </li>
        <li className="sort-filter__button">
          <a
            className="sort-filter__text--white"
            onClick={() => props.onSelectFilter('timestamp')}>
            timestamp
          </a>
        </li>
      </ul>
    </div>
  )
}

export default PostFilter;
