import {
  ADD_ARTICLE,
  ARTICLE_LIST,
  DELETE_ARTICLE,
  DETAIL_ARTICLE,
  EDIT_ARTICLE,
  TOGGLE_EDIT_ARTICLE
} from '../const/article';

const initialState = {
  articleDetail: {},
  articleEdit: {},
  articleList: []
};

export default function article(state = initialState, action) {
  switch (action.type) {
    case ARTICLE_LIST:
      return {
        ...state,
        articleList: action.articleList,
      };

    case DETAIL_ARTICLE:
      return {
        ...state,
        articleDetail: action.data,
      };

    case ADD_ARTICLE:
      return {
        ...state,
        articleList: [...state.articleList, action.article],
      };

    case DELETE_ARTICLE:
      return {
        ...state,
        articleList: state.articleList.filter(val => action.id !== val._id),
      };

    case EDIT_ARTICLE:
      return {
        ...state,
        articleEdit: {},
        articleDetail: action.article,
      };

    case TOGGLE_EDIT_ARTICLE:
      if (action.data === 'edit') {
        return {
          ...state,
          articleEdit: state.articleDetail,
        }
      } else {
        return {
          ...state,
          articleEdit: {},
        }
      }
    default:
      return state
  }
}
