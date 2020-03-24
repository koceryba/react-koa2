import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './articlePage.scss';
import { getDetailArticle } from '../store/action/article';
import Article from '../component/article/article';
import ArticleEdit from '../component/article/articleEdit';
import ArticleEditForm from '../component/article/articleEditForm';
import Breadcrumbs from '../component/core/nav/breadcrumbs';

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    props.getArticle(this.props.match.params.id);
  }

  shouldComponentUpdate(nextProps) {
    const { articleEdit } = this.props;
    return nextProps.articleEdit !== { articleEdit };
  }

  render() {
    const { articleEdit } = this.props;
    return (
      <div className="article-page">
        <Breadcrumbs type={'article'} />
        <ArticleEdit />
        {
          articleEdit._id ?
            <ArticleEditForm /> :
            <Article />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articleEdit: state.articleReducer.articleEdit
});

const mapDispatchToProps = (dispatch) => ({
  getArticle: (id) => dispatch(getDetailArticle(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticlePage));
