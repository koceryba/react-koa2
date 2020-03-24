import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './recipeCard.scss';
import RecipeRemove from './recipeRemove';

class RecipeCard extends Component {
  render() {
    const { recipe } = this.props;
    return (
      <div className="recipe-card">
        <div className="recipe-card-body">
            <Link to={`/recipe/${recipe._id}`}>
              <h2 className="title">{recipe.title}</h2>
            </Link>
            <span className="description">{recipe.description}</span>
          <div className="recipe-buttons">
            <RecipeRemove id={recipe._id}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(RecipeCard);
