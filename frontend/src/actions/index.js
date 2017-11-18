const VIEW_POST = 'VIEW_POST';
const EDIT_POST = 'EDIT_POST';
const DELETE_POST = 'DELETE_POST';
const CREATE_POST = 'CREATE_POST';
const FILTER_POST = 'FILTER_POST';
const SORT_POST = 'SORT_POST';
const CREATE_COMMENT = 'CREATE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

export const sortList = sortBy => {
  return {
    type: 'SORT_LIST',
    by: sortBy
  }
}
