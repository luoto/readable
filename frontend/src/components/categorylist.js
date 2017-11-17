import React from 'react';

const CategoryList = (props) => {
  return (
    <div>
      <ul>
        {props.categories.map((category) => {
          return <li key={category.name}>{category.name}</li>;
        })
        }
      </ul>
    </div>
  )
}

export default CategoryList;
