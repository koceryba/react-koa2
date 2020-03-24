import React, {Component} from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import FormStateToRedux from '../core/form/formStateToRedux';
import './recipeEditForm.scss';
import { changeRecipe, toggleEditRecipe } from '../../store/action/recipe';

class RecipeEditForm extends Component {
  render() {
    const { recipeEdit } = this.props;
    return (
      <div className="recipe-edit-form">
        <Form
          onSubmit={values => this.props.changeRecipe(recipeEdit._id ,values)}
          initialValues={{ title: recipeEdit.title, description: recipeEdit.description }}
        >
          {({ handleSubmit, submitting, pristine }) => (
            <form className="recipe-form" onSubmit={handleSubmit}>
              <FormStateToRedux form="editRecipe" />
              <Field
                className="recipe-field"
                name="title"
                component="input"
                type="text"
                placeholder="Title"
              />
              <Field
                className="recipe-field"
                name="description"
                component="input"
                type="text"
                placeholder="Description"
              />
              <button className="btn-confirm" type="submit" disabled={submitting || pristine}>
                <FontAwesomeIcon icon={faCheck} /> Confirm
              </button>
              <button className="btn-cancel" type="button" onClick={() => this.props.toggleEditRecipe({})}>
                <FontAwesomeIcon icon={faTimesCircle} /> Cancel
              </button>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipeEdit: state.recipeReducer.recipeEdit
});

const mapDispatchToProps = (dispatch) => ({
  changeRecipe: (id, values) => dispatch(changeRecipe(id, values)),
  toggleEditRecipe: recipe => dispatch(toggleEditRecipe(recipe))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditForm);
