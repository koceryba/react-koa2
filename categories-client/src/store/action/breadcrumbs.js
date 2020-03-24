import {
  GET_ARTICLE_LIST_BREADCRUMBS,
  GET_LIST_BREADCRUMBS,
  GET_RECIPE_LIST_BREADCRUMBS,
  LIST_BREADCRUMBS
} from '../const/breadcrumbs';

export function getListBreadcrumbs(id) {
  return { type: GET_LIST_BREADCRUMBS, id }
}
export function getRecipeListBreadcrumbs(id) {
  return { type: GET_RECIPE_LIST_BREADCRUMBS, id }
}
export function getArticleListBreadcrumbs(id) {
  return { type: GET_ARTICLE_LIST_BREADCRUMBS, id }
}
export function listBreadcrumbs(data) {
  return { type: LIST_BREADCRUMBS, data }
}
