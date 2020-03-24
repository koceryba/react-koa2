import React, {Component} from 'react';

import CategoryCard from './categoryCard';

class CategoryListTree extends Component {
  render() {
    return (
      <div className="category-elist-tree">
        <CategoryCard key={`${this.props.category._id}-${this.props.category.title}`} category={this.props.category}/>
      </div>
    );
  }
}

export default CategoryListTree;