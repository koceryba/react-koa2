import {ADD_RECIPE, DELETE_RECIPE, DETAIL_RECIPE, EDIT_RECIPE, RECIPE_LIST, TOGGLE_EDIT_RECIPE} from '../const/recipe';

const initialState = {
  recipeDetail: {},
  recipeEdit: {},
  recipeList: []
};

export default function recipe(state = initialState, action) {
  switch (action.type) {
    case RECIPE_LIST:
      return {
        ...state,
        recipeList: action.recipeList
      };
    case DETAIL_RECIPE:
      return {
        ...state,
        recipeDetail: action.data,
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipeList: [...state.recipeList, action.recipe],
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipeList: state.recipeList.filter(val => action.id !== val._id),
      };
    case EDIT_RECIPE:
      return {
        ...state,
        recipeEdit: {},
        recipeDetail: action.recipe,
      };
    case TOGGLE_EDIT_RECIPE:
      if (action.data === 'edit') {
        return {
          ...state,
          recipeEdit: state.recipeDetail,
        }
      } else {
        return {
          ...state,
          recipeEdit: {},
        }
      }
    default:
      return state
  }
}
