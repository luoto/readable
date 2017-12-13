import { URL } from '../helpers/config';
import { generateRequest } from './actionHelpers';
import {
  TOGGLE_CATEGORY_FILTER,
  CATEGORIES_RECIEVED
} from './actionTypes';

export const selectCategory = (filter) => {
  return {
    type: TOGGLE_CATEGORY_FILTER,
    filter
  };
};

export const getCategories = () => {
  return (dispatch) => {
    const url = `${URL}/categories`;
    const request = generateRequest(url, 'GET');

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        dispatch({type: CATEGORIES_RECIEVED, categories: data.categories});
      })
      .catch(error => console.log(error));
  }
};
