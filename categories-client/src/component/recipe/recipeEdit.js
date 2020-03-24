import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import './recipeEdit.scss';
import { connect } from 'react-redux';
import { toggleEditRecipe } from '../../store/action/recipe';

function RecipeEdit (props) {
  return (
    <div className="recipe-edit">
      <button className="btn-edit" onClick={() => props.toggleEditRecipe('edit')}>
        <FontAwesomeIcon icon={faEdit} /> Edit
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleEditRecipe: data => dispatch(toggleEditRecipe(data))
});

export default connect(null, mapDispatchToProps)(RecipeEdit);
