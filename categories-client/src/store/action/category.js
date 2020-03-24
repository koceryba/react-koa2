import {
  ADD_CATEGORY, CHANGE_CATEGORY,
  CREATE_CATEGORY, DELETE_CATEGORY,
  DETAIL_CATEGORY, EDIT_CATEGORY,
  GET_ALL_CATEGORY,
  GET_DETAIL_CATEGORY, REDIRECT_FALSE,
  REMOVE_CATEGORY, TOGGLE_EDIT_CATEGORY
} from '../const/category';

export function getAllCategory(categoryList) {
  return { type: GET_ALL_CATEGORY, categoryList }
}
export function getDetailCategory(id) {
  return { type: GET_DETAIL_CATEGORY, id }
}
export function detailCategory(data) {
  return { type: DETAIL_CATEGORY, data }
}
export function createCategory(category) {
  return { type: CREATE_CATEGORY, category }
}
export function addCategory(category) {
  return { type: ADD_CATEGORY, category }
}
export function removeCategory(id) {
  return { type: REMOVE_CATEGORY, id }
}
export function deleteCategory(id, idList) {
  return { type: DELETE_CATEGORY, id, idList }
}
export function editCategory(category) {
  return { type: EDIT_CATEGORY, category }
}
export function changeCategory(id, category) {
  return { type: CHANGE_CATEGORY, id, category }
}
export function toggleEditCategory(category) {
  return { type: TOGGLE_EDIT_CATEGORY, category }
}
export function redirectFalse() {
  return { type: REDIRECT_FALSE }
}
