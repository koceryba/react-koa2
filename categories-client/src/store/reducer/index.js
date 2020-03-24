import { combineReducers } from 'redux';
import category from './category';
import recipe from './recipe';
import article from './article';
import breadcrumbs from './breadcrumbs';
import form from './form';
import notification from './notification';

export default combineReducers({
  categoryReducer: category,
  recipeReducer: recipe,
  articleReducer: article,
  breadcrumbsReducer: breadcrumbs,
  notificationReducer: notification,
  formReducer: form
})
