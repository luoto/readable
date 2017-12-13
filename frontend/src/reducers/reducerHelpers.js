export const insertObj = (array, obj) => {
  let newArray = array.slice();
  newArray.splice(0, 0, obj);
  return newArray;
}
