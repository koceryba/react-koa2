import { put, call, takeLeading } from 'redux-saga/effects';
import axios from 'axios';
import config from 'react-global-configuration';

import {
  addArticle,
  articleList,
  deleteArticle,
  detailArticle,
  editArticle
} from '../action/article';
import {
  CHANGE_ARTICLE,
  CREATE_ARTICLE,
  GET_ARTICLE_LIST,
  GET_DETAIL_ARTICLE,
  REMOVE_ARTICLE
} from '../const/article';


const API_HOST = config.get('apiHost');

const apiAddArticle = async (data) => {
  const dataVal = {
    title: data.article.title,
    description: data.article.description,
    text: data.article.text,
    categoryId: data.id
  };
  return await axios.post(`${API_HOST}/article`, dataVal )
    .then(res => res.data);
};
const apiDetailArticle = async (id) => {
  return await axios.get(`${API_HOST}/article/${id}`)
    .then(res => res.data);
};
const apiArticleList = async (id) => {
  return await axios.get(`${API_HOST}/articleList/${id}`)
    .then(res => res.data);
};
const apiRemoveArticle = async (id) => {
  return await axios.delete(`${API_HOST}/article/${id}`)
    .then(res => res.data);
};
const apiChangeArticle = async (data) => {
  const dataValue = {
    title: data.title,
    description: data.description,
    text: data.text,
  };
  return await axios.put(`${API_HOST}/article/${data.id}`, dataValue )
    .then(res => res.data);
};

export function* createArticle(article) {
  const result = yield call(apiAddArticle, article);
  yield put(addArticle(result));
}
export function* getDetailArticle(id) {
  const result = yield call(apiDetailArticle, id.id);
  yield put(detailArticle(result));
}
export function* getArticleList(id) {
  const result = yield call(apiArticleList, id.id);
  yield put(articleList(result));
}
export function* removeArticle(id) {
  const result = yield call(apiRemoveArticle, id.id);
  yield put(deleteArticle(result));
}
export function* changeArticle(data) {
  const dataValue = {
    id: data.id,
    title: data.article.title,
    description: data.article.description,
    text: data.article.text,
  };
  const result = yield call(apiChangeArticle, dataValue);
  yield put(editArticle(result));
}

export default [
  takeLeading(CREATE_ARTICLE, createArticle),
  takeLeading(GET_DETAIL_ARTICLE, getDetailArticle),
  takeLeading(GET_ARTICLE_LIST, getArticleList),
  takeLeading(REMOVE_ARTICLE, removeArticle),
  takeLeading(CHANGE_ARTICLE, changeArticle),
];
