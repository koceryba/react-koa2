import React, {Component} from 'react';
import {connect} from 'react-redux';

import './leftSideBar.scss';
import CategoryCreate from '../../category/categoryCreate';
import CategoryList from '../../category/categoryList';
import CategoryEditForm from '../../category/categoryEditForm';
import Notification from '../notification/notification';

class LeftSideBar extends Component {
  shouldComponentUpdate(nextProps) {
    const { categoryEdit } = this.props;
    return nextProps.categoryEdit !== categoryEdit;
  }

  render() {
    const { categoryEdit } = this.props;
    return (
      <div className="left-side-bar">
        <CategoryCreate />
        {
          categoryEdit._id ?
            <CategoryEditForm category={categoryEdit}/> :
            null
        }
        <CategoryList />

        <Notification />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categoryEdit: state.categoryReducer.categoryEdit
});

export default connect(mapStateToProps)(LeftSideBar);
