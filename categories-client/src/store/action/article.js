import {
  ADD_ARTICLE,
  ARTICLE_LIST, CHANGE_ARTICLE,
  CREATE_ARTICLE, DELETE_ARTICLE,
  DETAIL_ARTICLE, EDIT_ARTICLE,
  GET_ARTICLE_LIST,
  GET_DETAIL_ARTICLE, REMOVE_ARTICLE, TOGGLE_EDIT_ARTICLE
} from '../const/article';

export function getArticleList(id) {
  return { type: GET_ARTICLE_LIST, id }
}
export function articleList(articleList) {
  return { type: ARTICLE_LIST, articleList }
}
export function getDetailArticle(id) {
  return { type: GET_DETAIL_ARTICLE, id }
}
export function detailArticle(data) {
  return { type: DETAIL_ARTICLE, data }
}
export function createArticle(id, article) {
  return { type: CREATE_ARTICLE, id, article }
}
export function addArticle(article) {
  return { type: ADD_ARTICLE, article }
}
export function removeArticle(id) {
  return { type: REMOVE_ARTICLE, id }
}
export function deleteArticle(id) {
  return { type: DELETE_ARTICLE, id }
}
export function changeArticle(id, article) {
  return { type: CHANGE_ARTICLE, id, article }
}
export function editArticle(article) {
  return { type: EDIT_ARTICLE, article }
}
export function toggleEditArticle(data) {
  return { type: TOGGLE_EDIT_ARTICLE, data }
}
