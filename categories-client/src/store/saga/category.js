import { put, call, takeLeading } from 'redux-saga/effects';
import axios from 'axios';
import config from 'react-global-configuration';

import {addCategory, deleteCategory, detailCategory, editCategory, getAllCategory} from '../action/category';
import {
  CHANGE_CATEGORY,
  CREATE_CATEGORY,
  GET_ALL_CATEGORY,
  GET_DETAIL_CATEGORY,
  REMOVE_CATEGORY
} from '../const/category';
import {notificationError, notificationSuccess} from "../action/notification";

const API_HOST = config.get('apiHost');

const apiAllCategory = async () => {
  return axios.get(`${API_HOST}/category`);
};

const apiDetailCategory = async (id) => {
  return axios.get(`${API_HOST}/category/${id}`);
};

const apiAddCategory = async (data) => {
  const dataVal = {
    title: 111,
    parentId: data.parent
  };

  return axios.post(`${API_HOST}/category`, dataVal );
};

const apiRemoveCategory = async (id) => {
  return axios.delete(`${API_HOST}/category/${id}`);
};

const apiChangeCategory = async (data) => {
  const dataValue = {
    title: data.title,
    parentId: data.parentId
  };

  return axios.put(`${API_HOST}/category/${data.id}`, dataValue );
};

export function* getAllCategorySaga() {
  const result = yield call(apiAllCategory);
  yield put(getAllCategory(result.data));
}

export function* getDetailCategory(id) {
  const result = yield call(apiDetailCategory, id.id);
  yield put(detailCategory(result.data));
}

export function* createCategory(category) {
  const result = yield call(apiAddCategory, category.category);
  console.log('result', result);
  if (result.status === 200) {
    yield put(notificationSuccess('Category created'));
  } else {
    yield put(notificationError(result.message));
  }
  yield put(addCategory(result.data));
}

export function* removeCategory(id) {
  const result = yield call(apiRemoveCategory, id.id);
  yield put(deleteCategory(id.id, result.data));
}

export function* changeCategory(data) {
  const dataValue = {
    id: data.id,
    title: data.category.title,
    parentId: data.category.parent
  };

  const result = yield call(apiChangeCategory, dataValue);
  yield put(editCategory(result.data));
}

export default [
  takeLeading(GET_ALL_CATEGORY, getAllCategorySaga),
  takeLeading(GET_DETAIL_CATEGORY, getDetailCategory),
  takeLeading(CREATE_CATEGORY, createCategory),
  takeLeading(REMOVE_CATEGORY, removeCategory),
  takeLeading(CHANGE_CATEGORY, changeCategory),
];
