import {
  ADD_RECIPE, CHANGE_RECIPE,
  CREATE_RECIPE, DELETE_RECIPE,
  DETAIL_RECIPE, EDIT_RECIPE,
  GET_DETAIL_RECIPE,
  GET_RECIPE_LIST,
  RECIPE_LIST, REMOVE_RECIPE, TOGGLE_EDIT_RECIPE
} from '../const/recipe';

export function getRecipeList(id) {
  return { type: GET_RECIPE_LIST, id }
}
export function recipeList(recipeList) {
  return { type: RECIPE_LIST, recipeList }
}
export function getDetailRecipe(id) {
  return { type: GET_DETAIL_RECIPE, id }
}
export function detailRecipe(data) {
  return { type: DETAIL_RECIPE, data }
}
export function createRecipe(id, recipe) {
  return { type: CREATE_RECIPE, id, recipe }
}
export function addRecipe(recipe) {
  return { type: ADD_RECIPE, recipe }
}
export function removeRecipe(id) {
  return { type: REMOVE_RECIPE, id }
}
export function deleteRecipe(id) {
  return { type: DELETE_RECIPE, id }
}
export function changeRecipe(id, recipe) {
  return { type: CHANGE_RECIPE, id, recipe }
}
export function editRecipe(recipe) {
  return { type: EDIT_RECIPE, recipe }
}
export function toggleEditRecipe(data) {
  return { type: TOGGLE_EDIT_RECIPE, data }
}
