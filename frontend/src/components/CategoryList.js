import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = (props) => {
  return (
    <ul className="category-list">
      <li className="category-list__item">
        <Link className="category-link--white" to="/">all</Link>
      </li>
      {props.categories.map(category => {
        return (
        <li
          className="category-list__item"
          key={category.name}
        >
          <Link className="category-link--white" to={`/${category.name}`}>{category.name}</Link>
        </li>
      )
      })}
    </ul>
  )
}

export default CategoryList;
