import { all } from 'redux-saga/effects';

import category from './category';
import recipe from './recipe';
import article from './article';
import breadcrumbs from './breadcrumbs';

export default function* root() {
  yield all([
    ...category,
    ...recipe,
    ...article,
    ...breadcrumbs
  ])
}
