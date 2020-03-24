import React, {Component} from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import FormStateToRedux from '../core/form/formStateToRedux';
import './articleEditForm.scss';
import { changeArticle, toggleEditArticle } from '../../store/action/article';

class ArticleEditForm extends Component {
  render() {
    const { articleEdit } = this.props;
    return (
      <div className="article-edit-form">
        <Form
          onSubmit={values => this.props.changeArticle(articleEdit._id ,values)}
          initialValues={{ title: articleEdit.title, description: articleEdit.description }}
        >
          {({ handleSubmit, submitting, pristine }) => (
            <form className="article-form" onSubmit={handleSubmit}>
              <FormStateToRedux form="editArticle" />
              <Field
                className="article-field"
                name="title"
                component="input"
                type="text"
                placeholder="Title"
              />
              <Field
                className="article-field"
                name="description"
                component="input"
                type="text"
                placeholder="Description"
              />
              <Field
                className="article-field"
                name="text"
                component="input"
                type="text"
                placeholder="Text"
              />
              <button className="btn-confirm" type="submit" disabled={submitting || pristine}>
                <FontAwesomeIcon icon={faCheck} /> Confirm
              </button>
              <button className="btn-cancel" type="button" onClick={() => this.props.toggleEditArticle({})}>
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
  articleEdit: state.articleReducer.articleEdit
});

const mapDispatchToProps = (dispatch) => ({
  changeArticle: (id, values) => dispatch(changeArticle(id, values)),
  toggleEditArticle: recipe => dispatch(toggleEditArticle(recipe))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditForm);
