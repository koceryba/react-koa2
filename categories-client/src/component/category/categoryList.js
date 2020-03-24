import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryListTree from './categoryListTree';
import { getAllCategory } from '../../store/action/category';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    props.getAllCategory();
  }

  render() {
    const { parentCategoryList } = this.props;
    return (
      <div className="category-list">
        { parentCategoryList ?
          parentCategoryList.map((category) => (
            <CategoryListTree key={category._id} category={category}/>
          ))
          : null }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parentCategoryList: state.categoryReducer.parentCategoryList
});
const mapDispatchToProps = (dispatch) => ({
  getAllCategory: () => dispatch(getAllCategory())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
