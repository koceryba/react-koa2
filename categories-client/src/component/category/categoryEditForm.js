import React, {Component} from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import FormStateToRedux from '../core/form/formStateToRedux';
import './categoryEditForm.scss';
import { changeCategory, toggleEditCategory } from '../../store/action/category';

class CategoryEditForm extends Component {
  render() {
    const { category, categoryList } = this.props;
    return (
      <div className="category-edit-form">
        <Form 
          onSubmit={values => this.props.changeCategory(category._id, values)}
          initialValues={{ title: category.title, parent: category.parentId }}
        >
          {({ handleSubmit, submitting, pristine }) => (
            <form className="category-form" onSubmit={handleSubmit}>
              <FormStateToRedux form="addCategory" />
              <Field
                className="category-field"
                name="title"
                component="input"
                type="text"
                placeholder="Title"
              />
              <Field
                className="category-field"
                name="parent"
                component="select"
              >
                <option value={null}>No</option>
                {categoryList ?
                  categoryList.map((category) => (
                    <option key={category._id} value={category._id}>{category.title}</option>
                  ))
                  : null }
              </Field>
              <button className="btn-confirm" type="submit" disabled={submitting || pristine}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button className="btn-cancel" type="button" onClick={() => this.props.toggleEditCategory({})}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categoryList: state.categoryReducer.categoryList
});

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (id, values) => dispatch(changeCategory(id, values)),
  toggleEditCategory: category => dispatch(toggleEditCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEditForm);
