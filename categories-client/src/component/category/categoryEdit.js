import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import './categoryEdit.scss';
import { toggleEditCategory } from '../../store/action/category';

function CategoryEdit (props) {
  return (
    <div className="category-edit">
      <button className="btn-edit" onClick={() => props.toggleEditCategory(props.category)}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleEditCategory: category => dispatch(toggleEditCategory(category))
});

export default connect(null, mapDispatchToProps)(CategoryEdit);