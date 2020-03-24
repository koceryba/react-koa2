import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './categoryRemove.scss';
import { removeCategory } from '../../store/action/category';

function CategoryRemove (props) {
  return (
    <div className="category-remove">
      <button className="btn-remove" onClick={() => props.removeCategory(props.id, props.parentId)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button> 
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeCategory: (id, parentId) => dispatch(removeCategory(id, parentId))
});

export default connect(null, mapDispatchToProps)(CategoryRemove);
