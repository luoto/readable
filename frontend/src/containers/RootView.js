import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostList from '../components/PostList';
import PostFilter from '../components/PostFilter';
import * as actions from '../actions';

class RootView extends React.Component {
  componentWillMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    const category = this.props.location.pathname.split('/').pop();
    return (
      <div className="post-wrapper">
        <Link className="button--circle" to='/posts/new'>
          <i className="material-icons button-icon">add</i>
        </Link>
        <PostFilter onSelectFilter={this.props.selectSortFilter} />
        <PostList
          comments={this.props.comments}
          posts={!category
            ? this.props.posts
            : this.props.posts.filter((post) => post.category === category)}
          onDelete={this.props.deletePost}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts.sort((a, b) => {
      switch(state.sortFilter) {
        case 'timestamp':
          return b.timestamp - a.timestamp;
        default:
          return b.voteScore - a.voteScore;
      }
    }),
    sortFilter: state.sortFilter,
    comments: state.comments
  };
};

const ConnectedRootView = connect(mapStateToProps, actions)(RootView)

export default ConnectedRootView;
