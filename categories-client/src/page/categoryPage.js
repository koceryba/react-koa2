import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './categoryPage.scss';
import {getDetailCategory, redirectFalse} from '../store/action/category';
import { getRecipeList } from '../store/action/recipe';
import { getArticleList } from '../store/action/article';
import RecipeList from '../component/recipe/recipeList';
import ArticleList from '../component/article/articleList';
import Breadcrumbs from '../component/core/nav/breadcrumbs';

class CategoryPage extends Component {
  state = {
    category: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (state.category !== props.match.params.id) {
      props.getCategory(props.match.params.id);
      return {
        ...state,
        category: props.match.params.id,
      }
    }

    if (props.redirect) {
      if (props.redirect.includes(props.match.params.id)) {
        setTimeout(() => {
          props.redirectFalse();
          props.history.push('/');
        });
      }
    }

    return state;
  }

  render() {
    const { categoryDetail } = this.props;
    return (
      <div className="category-page">
        <Breadcrumbs type={'category'} />
        {
          categoryDetail ?
            <h1>{categoryDetail.title}</h1> :
            null
        }
        <RecipeList />
        <ArticleList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  redirect: state.categoryReducer.redirect,
  categoryDetail: state.categoryReducer.categoryDetail
});
const mapDispatchToProps = (dispatch) => ({
  getCategory: (id) => {
    dispatch(getDetailCategory(id));
    dispatch(getRecipeList(id));
    dispatch(getArticleList(id));
  },
  redirectFalse: () => dispatch(redirectFalse())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CategoryPage));
