import React, {Component} from 'react';
import {connect} from 'react-redux';

import './recipe.scss';

class Recipe extends Component {
  shouldComponentUpdate(nextProps) {
    const { recipeDetail } = this.props;
    return nextProps.recipeDetail !== { recipeDetail };
  }

  render() {
    const { recipeDetail } = this.props;
    return (
      <div className="recipe">
        {
          recipeDetail ?
            <div className="recipe-detail">
              <h2 className="recipe-detail-title">{recipeDetail.title}</h2>
              <span className="recipe-detail-description">{recipeDetail.description}</span>
            </div> :
            null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipeDetail: state.recipeReducer.recipeDetail
});

export default connect(mapStateToProps)(Recipe);
