import React, {Component} from 'react';
import {connect} from 'react-redux';

import './article.scss';

class Article extends Component {
  shouldComponentUpdate(nextProps) {
    const { articleDetail } = this.props;
    return nextProps.articleDetail !== articleDetail;
  }

  render() {
    const { articleDetail } = this.props;
    return (
      <div className="article">
        {
          articleDetail ?
            <div className="article-detail">
              <h2 className="article-detail-title">{articleDetail.title}</h2>
              <span className="article-detail-description">{articleDetail.description}</span>
              <span className="article-detail-text">{articleDetail.text}</span>
            </div> :
            null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articleDetail: state.articleReducer.articleDetail
});

export default connect(mapStateToProps)(Article);
