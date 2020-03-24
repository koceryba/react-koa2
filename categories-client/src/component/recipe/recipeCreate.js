import React, {Component} from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import FormStateToRedux from '../core/form/formStateToRedux';
import './recipeCreate.scss';
import { createRecipe } from '../../store/action/recipe';

class RecipeCreate extends Component {
  shouldComponentUpdate(nextProps) {
    const { recipeList } = this.props;
    return nextProps.recipeList !== { recipeList };
  }

  render() {
    const { _id } = this.props.categoryDetail;
    return (
      <div className="recipe-create" key={new Date()}>
        <Form
          onSubmit={values => this.props.addRecipe(_id, values)}
          initialValues={{ title: '', description: '' }}
        >
          {({ handleSubmit, submitting, pristine }) => (
            <form 
              className="recipe-form"
              onSubmit={handleSubmit}
            >
              <FormStateToRedux form="addRecipe" />
              <Field
                className="recipe-field"
                name="title"
                component="input"
                type="text"
                placeholder="New recipe"
              />
              <Field
                className="recipe-field"
                name="description"
                component="input"
                type="text"
                placeholder="Description"
              />
              <button className="btn-add" type="submit" disabled={submitting || pristine}>
                <FontAwesomeIcon icon={faPlus} /> Create
              </button>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categoryDetail: state.categoryReducer.categoryDetail,
  recipeList: state.recipeReducer.recipeList
});

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (id, values) => dispatch(createRecipe(id, values))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCreate);
