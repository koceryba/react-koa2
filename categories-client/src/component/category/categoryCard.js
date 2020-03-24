import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import './categoryCard.scss';
import CategoryRemove from './categoryRemove';
import CategoryEdit from './categoryEdit';
import CategoryListTree from './categoryListTree';

class CategoryCard extends Component {
  shouldComponentUpdate(nextProps) {
    const { childCategoryList } = this.props;
    return nextProps.childCategoryList !== childCategoryList;
  }

  render() {
    const { childCategoryList } = this.props;
    return (
      <div className="category-card">
        <div className="category-card-body">
          <Link to={`/category/${this.props.category._id}`}>
            <h2 className="title">{this.props.category.title}</h2>
          </Link>
          <CategoryEdit category={this.props.category} />
          <CategoryRemove id={this.props.category._id} parentId={this.props.category.parentId} />
        </div>
        {
          childCategoryList ?
            childCategoryList.map(category => (
              category.parentId === this.props.category._id ?
              <CategoryListTree key={category._id} category={category} /> :
              null
            )) :
            null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  childCategoryList: state.categoryReducer.childCategoryList
});

export default connect(mapStateToProps)(CategoryCard);
