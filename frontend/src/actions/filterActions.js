import {
  TOGGLE_SORT_FILTER
} from './actionTypes';

export const selectSortFilter = (filter) => {
  return {
    type: TOGGLE_SORT_FILTER,
    filter
  };
};
