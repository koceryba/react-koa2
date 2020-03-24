import { put, call, takeLeading } from 'redux-saga/effects';
import axios from 'axios';
import config from 'react-global-configuration';

import {listBreadcrumbs} from '../action/breadcrumbs';
import {GET_ARTICLE_LIST_BREADCRUMBS, GET_LIST_BREADCRUMBS, GET_RECIPE_LIST_BREADCRUMBS} from '../const/breadcrumbs';

const API_HOST = config.get('apiHost');

const apiListBreadcrumbs = async (id) => {
  return await axios.get(`${API_HOST}/breadcrumbs/category/${id}`)
    .then(res => res.data);
};
const apiRecipeListBreadcrumbs = async (id) => {
  return await axios.get(`${API_HOST}/breadcrumbs/recipe/${id}`)
    .then(res => res.data);
};
const apiArticleListBreadcrumbs = async (id) => {
  return await axios.get(`${API_HOST}/breadcrumbs/article/${id}`)
    .then(res => res.data);
};

export function* getListBreadcrumbs(id) {
  const result = yield call(apiListBreadcrumbs, id.id);
  yield put(listBreadcrumbs(result));
}
export function* getRecipeListBreadcrumbs(id) {
  const result = yield call(apiRecipeListBreadcrumbs, id.id);
  yield put(listBreadcrumbs(result));
}
export function* getArticleListBreadcrumbs(id) {
  const result = yield call(apiArticleListBreadcrumbs, id.id);
  yield put(listBreadcrumbs(result));
}

export default [
  takeLeading(GET_LIST_BREADCRUMBS, getListBreadcrumbs),
  takeLeading(GET_RECIPE_LIST_BREADCRUMBS, getRecipeListBreadcrumbs),
  takeLeading(GET_ARTICLE_LIST_BREADCRUMBS, getArticleListBreadcrumbs),
];
