import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './recipeRemove.scss';
import { removeRecipe } from '../../store/action/recipe';

function RecipeRemove (props) {
  return (
    <div className="recipe-remove">
      <button className="btn-remove" onClick={() => props.removeRecipe(props.id)}>
        <FontAwesomeIcon icon={faTrashAlt} /> Delete
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeRecipe: id => dispatch(removeRecipe(id))
});

export default connect(null, mapDispatchToProps)(RecipeRemove);
