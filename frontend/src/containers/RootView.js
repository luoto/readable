import React from 'react';
import CategoryList from '../components/categorylist';
import PostList from '../components/postlist';
import { connect } from 'react-redux';

class RootView extends React.Component {
  render() {
    return (
      <div>
        <CategoryList categories={this.props.categories} />
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

const ConnectedRootView = connect(mapStateToProps)(RootView)

export default ConnectedRootView;
