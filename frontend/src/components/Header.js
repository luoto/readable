import React from 'react';
import CategoryList from './CategoryList';
import { connect } from 'react-redux';
import { selectCategory, getCategories } from '../actions';

class Header extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <header className="header">
          <h1 className="header__title">Readable</h1>
          <CategoryList
            categories={this.props.categories}
            onSelectCategory={this.props.onSelectCategory}
          />
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectCategory: (category) => {
      dispatch(selectCategory(category));
    },
    getCategories: () => {
      dispatch(getCategories());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
