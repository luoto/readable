export const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'CATEGORIES_RECIEVED':
      return action.categories;
    default:
      return state;
  }
}
