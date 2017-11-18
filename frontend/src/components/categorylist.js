import React from 'react';

const CategoryList = (props) => {
  return (
    <section>
      <h2>Categories</h2>
      <ul className="categoryList">
        <li><a href="/categories/udacity">Udacity</a></li>
        <li><a href="/categories/react">React</a></li>
        <li><a href="/categories/redux">Redux</a></li>
      </ul>
    </section>
  )
}

export default CategoryList;
