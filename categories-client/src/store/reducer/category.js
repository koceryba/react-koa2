import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  DETAIL_CATEGORY, EDIT_CATEGORY,
  GET_ALL_CATEGORY, REDIRECT_FALSE,
  TOGGLE_EDIT_CATEGORY
} from '../const/category';

const initialState = {
  redirect: false,
  success: true,
  categoryEdit: {},
  categoryDetail: {},
  categoryList: [],
  parentCategoryList: [],
  childCategoryList: [],
  articleList: []
};

export default function category(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      if (action.categoryList) {
        state.parentCategoryList = action.categoryList.filter(val => !val.parentId);
        state.childCategoryList = action.categoryList.filter(val => val.parentId);
      }
      return {
        ...state,
        categoryList: action.categoryList,
        parentCategoryList: state.parentCategoryList,
        childCategoryList: state.childCategoryList
      };
    case DETAIL_CATEGORY:
      return {
        ...state,
        categoryDetail: action.data
      };
    case ADD_CATEGORY:
      if (action.category.parentId) {
        return {
          ...state,
          categoryAddState: true,
          categoryList: [...state.categoryList, action.category],
          childCategoryList: [...state.childCategoryList, action.category],
        }
      } else {
        return {
          ...state,
          categoryAddState: true,
          categoryList: [...state.categoryList, action.category],
          parentCategoryList: [...state.parentCategoryList, action.category],
        }
      }
    case DELETE_CATEGORY:
      return {
        ...state,
        redirect: action.idList,
        categoryList: state.categoryList.filter(val => !action.idList.includes(val._id)),
        childCategoryList: state.childCategoryList.filter(val => !action.idList.includes(val._id)),
        parentCategoryList: state.parentCategoryList.filter(val => !action.idList.includes(val._id)),
      };
    case TOGGLE_EDIT_CATEGORY:
      return {
        ...state,
        categoryEdit: action.category
      };
    case EDIT_CATEGORY:
      let categoryList = state.categoryList.map(category => {
        if (category._id === action.category._id) {
          return action.category;
        } else {
          return category
        }
      });
      if (action.category.parentId) {
        let childCategoryList = state.childCategoryList.map(category => {
          if (category._id === action.category._id) {
            return action.category;
          } else {
            return category
          }
        });
        return {
          ...state,
          categoryEdit: {},
          categoryList: categoryList,
          childCategoryList: childCategoryList,
        }
      } else {
        let parentCategoryList = state.parentCategoryList.map(category => {
          if (category._id === action.category._id) {
            return action.category;
          } else {
            return category
          }
        });
        return {
          ...state,
          categoryEdit: {},
          categoryList: categoryList,
          parentCategoryList: parentCategoryList,
        }
      }
    case REDIRECT_FALSE:
      return {
        ...state,
        redirect: false
      };
    default:
      return state
  }
}
