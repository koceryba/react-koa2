import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import FormStateToRedux from '../core/form/formStateToRedux';
import './categoryCreate.scss';
import { createCategory } from '../../store/action/category';

class CategoryCreate extends Component {
  shouldComponentUpdate(nextProps) {
    const { categoryList } = this.props;
    return nextProps.categoryList !== categoryList;
  }

  render() {
    const { categoryList } = this.props;
    return (
      <div className="category-create" key={new Date()}>
        <Form
          onSubmit={values => this.props.addCategory(values)}
          initialValues={{ title: '', parent: null }}
        >
          {({ handleSubmit, submitting, pristine }) => (
            <form className="category-form" onSubmit={handleSubmit}
            >
              <FormStateToRedux form="addCategory" />
              <Field
                className="category-field"
                name="title"
                component="input"
                type="text"
                placeholder="New category"
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
              <button className="btn-add" type="submit" disabled={submitting || pristine}>
                <FontAwesomeIcon icon={faPlus} />
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
  addCategory: values => dispatch(createCategory(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCreate);
