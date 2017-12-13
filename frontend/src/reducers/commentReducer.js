import { insertObj } from './reducerHelpers';

export const commentReducer = (state = [], action) => {
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
