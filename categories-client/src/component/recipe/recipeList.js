import React, {Component} from 'react';
import {connect} from 'react-redux';

import './recipeList.scss';
import RecipeCard from './recipeCard';
import RecipeCreate from './recipeCreate';

class RecipeList extends Component {
  shouldComponentUpdate(nextProps) {
    const { recipeList } = this.props;
    return nextProps.recipeList !== { recipeList };
  }

  render() {
    const { recipeList } = this.props;
    return (
      <div className="recipe-list">
        <h2 className="recipe-list-title">Recipes:</h2>
        <RecipeCreate />
        <div className="recipe-card-list">
          {
            recipeList ?
              recipeList.map(recipe => (
                <RecipeCard key={`${recipe._id}-${new Date()}`} recipe={recipe} />
              )) :
              null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipeList: state.recipeReducer.recipeList
});

export default connect(mapStateToProps)(RecipeList);
