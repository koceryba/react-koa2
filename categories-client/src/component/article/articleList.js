import React, {Component} from 'react';
import {connect} from 'react-redux';

import './articleList.scss';
import ArticleCard from './articleCard';
import ArticleCreate from './articleCreate';

class ArticleList extends Component {
  shouldComponentUpdate(nextProps) {
    const { articleList } = this.props;
    return nextProps.articleList !== { articleList };
  }

  render() {
    const { articleList } = this.props;
    return (
      <div className="article-list">
        <h2 className="article-list-title">Articles:</h2>
        <ArticleCreate />
        <div className="article-card-list">
          {
            articleList ?
              articleList.map(article => (
                <ArticleCard key={`${article._id}-${new Date()}`} article={article} />
              )) :
              null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articleList: state.articleReducer.articleList
});

export default connect(mapStateToProps)(ArticleList);
