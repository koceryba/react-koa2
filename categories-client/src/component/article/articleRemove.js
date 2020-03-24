import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './articleRemove.scss';
import { removeArticle } from '../../store/action/article';

function ArticleRemove (props) {
  return (
    <div className="article-remove">
      <button className="btn-remove" onClick={() => props.removeArticle(props.id)}>
        <FontAwesomeIcon icon={faTrashAlt} /> Delete
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeArticle: id => dispatch(removeArticle(id))
});

export default connect(null, mapDispatchToProps)(ArticleRemove);