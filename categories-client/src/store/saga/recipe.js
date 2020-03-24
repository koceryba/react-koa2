import { put, call, takeLeading } from 'redux-saga/effects';
import axios from 'axios';
import config from 'react-global-configuration';

import {addRecipe, deleteRecipe, detailRecipe, editRecipe, recipeList} from '../action/recipe';
import {CHANGE_RECIPE, CREATE_RECIPE, GET_DETAIL_RECIPE, GET_RECIPE_LIST, REMOVE_RECIPE} from '../const/recipe';

const API_HOST = config.get('apiHost');

const apiAddRecipe = async ({id, recipe: { title, description } = {}}) => {
  const dataVal = {
    title,
    description,
    categoryId: id,
  };
  return axios.post(`${API_HOST}/recipe`, dataVal )
    .then(res => res.data);
};
const apiDetailRecipe = async (id) => {
  return await axios.get(`${API_HOST}/recipe/${id}`)
    .then(res => res.data);
};
const apiRecipeList = async (id) => {
  return await axios.get(`${API_HOST}/recipeList/${id}`)
    .then(res => res.data);
};
const apiRemoveRecipe = async (id) => {
  return await axios.delete(`${API_HOST}/recipe/${id}`)
    .then(res => res.data);
};
const apiChangeRecipe = async (data) => {
  const dataValue = {
    title: data.title,
    description: data.description
  };
  return await axios.put(`${API_HOST}/recipe/${data.id}`, dataValue )
    .then(res => res.data);
};

export function* createRecipe(recipe) {
  const result = yield call(apiAddRecipe, recipe);
  yield put(addRecipe(result));
}
export function* getDetailRecipe(id) {
  const result = yield call(apiDetailRecipe, id.id);
  yield put(detailRecipe(result));
}
export function* getRecipeList(id) {
  const result = yield call(apiRecipeList, id.id);
  yield put(recipeList(result));
}
export function* removeRecipe(id) {
  const result = yield call(apiRemoveRecipe, id.id);
  yield put(deleteRecipe(result));
}
export function* changeRecipe(data) {
  const dataValue = {
    id: data.id,
    title: data.recipe.title,
    description: data.recipe.description
  };
  const result = yield call(apiChangeRecipe, dataValue);
  yield put(editRecipe(result));
}

export default [
  takeLeading(CREATE_RECIPE, createRecipe),
  takeLeading(GET_DETAIL_RECIPE, getDetailRecipe),
  takeLeading(GET_RECIPE_LIST, getRecipeList),
  takeLeading(REMOVE_RECIPE, removeRecipe),
  takeLeading(CHANGE_RECIPE, changeRecipe),
];
