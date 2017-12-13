import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { categoryFilterReducer } from './categoryFilterReducer';
import { sortFilterReducer } from './sortFilterReducer';
import { postReducer } from './postReducer';
import { commentReducer } from './commentReducer';

const readableApp = combineReducers({
  categories: categoryReducer,
  categoryFilter: categoryFilterReducer,
  sortFilter: sortFilterReducer,
  posts: postReducer,
  comments: commentReducer,
});

export default readableApp;
