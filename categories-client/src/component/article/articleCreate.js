import React, {Component} from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import FormStateToRedux from '../core/form/formStateToRedux';
import './articleCreate.scss';
import { createArticle } from '../../store/action/article';

class ArticleCreate extends Component {
  shouldComponentUpdate(nextProps) {
    const { articleList } = this.props;
    return nextProps.articleList !== { articleList };
  }

  render() {
    const { _id } = this.props.categoryDetail;
    return (
      <div className="article-create" key={new Date()}>
        <Form
          onSubmit={values => this.props.addArticle(_id, values)}
          initialValues={{ title: '', description: '', text: '' }}
        >
          {({ handleSubmit, submitting, pristine }) => (
            <form
              className="article-form"
              onSubmit={handleSubmit}
            >
              <FormStateToRedux form="addRecipe" />
              <Field
                className="article-field"
                name="title"
                component="input"
                type="text"
                placeholder="New recipe"
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
  articleList: state.articleReducer.articleList
});

const mapDispatchToProps = (dispatch) => ({
  addArticle: (id, values) => dispatch(createArticle(id, values))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreate);
