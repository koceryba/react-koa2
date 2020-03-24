import {
  LIST_BREADCRUMBS,
} from '../const/breadcrumbs'

const initialState = {
  breadcrumbsList: []
};

export default function breadcrumbs(state = initialState, action) {
  switch (action.type) {
    case LIST_BREADCRUMBS:
      return {
        ...state,
        breadcrumbsList: action.data,
      };
    default:
      return state
  }
}
