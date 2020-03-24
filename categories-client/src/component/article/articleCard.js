import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './articleCard.scss';
import ArticleRemove from './articleRemove';

class ArticleCard extends Component {
  render() {
    const { article } = this.props;
    return (
      <div className="article-card">
        <div className="article-card-body">
          <Link to={`/article/${article._id}`}>
            <h2 className="title">{article.title}</h2>
          </Link>
          <span className="description">{article.description}</span>
          <div className="recipe-buttons">
            <ArticleRemove id={article._id}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ArticleCard);
