import {combineReducers} from 'redux';

// HELPERS
const insertObj = (array, obj) => {
  let newArray = array.slice();
  newArray.splice(0, 0, obj);
  return newArray;
}

// CATEGORY REDUCER
const categories = (state = [], action) => {
  switch (action.type) {
    case 'CATEGORIES_RECIEVED':
      return action.categories;
    default:
      return state;
  }
}

// CATEGORY FILTER REDUCER
const categoryFilter = (state = 'all', action) => {
  switch (action.type) {
    case 'TOGGLE_CATEGORY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

// SORT FILTER REDUCER
const sortFilter = (state = 'voteScore', action) => {
  switch (action.type) {
    case 'TOGGLE_SORT_FILTER':
      return action.filter;
    default:
      return state;
  }
}

// POST REDUCER
const posts = (state = [], action) => {
  switch (action.type) {
    case 'GET_POST':
      return [action.post];
    case 'POSTS_RECIEVED':
      return action.posts;
    case 'CREATE_POST':
      return insertObj(state, action.post);
    case 'DELETE_POST':
      return state.map((post) => {
        if (post.id === action.post.id) {
          return { ...action.post };
        }
        return post;
      });
    case 'EDIT_POST':
      return state.map((post) => {
        if (post.id === action.post.id) {
          return { ...action.post };
        }
        return post;
      });
    case 'UPVOTE_POST':
      return state.map((post) => {
        if (post.id === action.post.id) {
          return { ...action.post};
        }
        return post;
      });
    case 'DOWNVOTE_POST':
      return state.map((post) => {
        if (post.id === action.post.id) {
          return { ...action.post};
        }
        return post;
      });
    default:
      return state;
  }
}

// COMMENT REDUCER
const comments = (state = [], action) => {
  switch (action.type) {
    case 'COMMENTS_RECEIVED':
      return action.comments;
    case 'CREATE_COMMENT':
      return insertObj(state, action.comment);
    case 'DELETE_COMMENT':
      return state.map((comment) => {
        if (comment.id === action.comment.id) {
          return { ...action.comment }
        }
        return comment;
      });
    case 'EDIT_COMMENT':
      return state.map((comment) => {
        if (comment.id === action.comment.id) {
          return { ...action.comment };
        }
        return comment;
      });
    case 'UPVOTE_COMMENT':
      return state.map((comment) => {
        if (comment.id === action.comment.id) {
          return { ...action.comment }
        }
        return comment;
      });
    case 'DOWNVOTE_COMMENT':
      return state.map((comment) => {
        if (comment.id === action.comment.id) {
          return { ...action.comment }
        }
        return comment;
      });
    default:
      return state;
  }
}

const readableApp = combineReducers({
  categories,
  categoryFilter,
  sortFilter,
  posts,
  comments,
});

export default readableApp;
