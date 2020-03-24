import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './recipePage.scss';
import { getDetailRecipe } from '../store/action/recipe';
import Recipe from '../component/recipe/recipe';
import RecipeEdit from '../component/recipe/recipeEdit';
import RecipeEditForm from '../component/recipe/recipeEditForm';
import Breadcrumbs from '../component/core/nav/breadcrumbs';

class RecipePage extends Component {
  constructor(props) {
    super(props);
    props.getRecipe(this.props.match.params.id);
  }

  shouldComponentUpdate(nextProps) {
    const { recipeEdit } = this.props;
    return nextProps.recipeEdit !== { recipeEdit };
  }

  render() {
    const { recipeEdit } = this.props;
    return (
      <div className="recipe-page">
        <Breadcrumbs type={'recipe'} />
        <RecipeEdit />
        {
          recipeEdit._id ?
            <RecipeEditForm /> :
            <Recipe />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipeEdit: state.recipeReducer.recipeEdit
});

const mapDispatchToProps = (dispatch) => ({
  getRecipe: (id) => dispatch(getDetailRecipe(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RecipePage));
