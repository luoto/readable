export const categoryFilterReducer = (state = 'all', action) => {
  switch (action.type) {
    case 'TOGGLE_CATEGORY_FILTER':
      return action.filter;
    default:
      return state;
  }
}
