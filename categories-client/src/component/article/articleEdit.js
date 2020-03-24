import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import './articleEdit.scss';
import { toggleEditArticle } from '../../store/action/article';

function ArticleEdit (props) {
  return (
    <div className="article-edit">
      <button className="btn-edit" onClick={() => props.toggleEditArticle('edit')}>
        <FontAwesomeIcon icon={faEdit} /> Edit
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleEditArticle: data => dispatch(toggleEditArticle(data))
});

export default connect(null, mapDispatchToProps)(ArticleEdit);
