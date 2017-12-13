import { insertObj } from './reducerHelpers';

export const postReducer = (state = [], action) => {
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
