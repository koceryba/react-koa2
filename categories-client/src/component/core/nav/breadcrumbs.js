import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import './brearcrumbs.scss';
import {
  getListBreadcrumbs,
  getRecipeListBreadcrumbs,
  getArticleListBreadcrumbs
} from '../../../store/action/breadcrumbs';

class Breadcrumbs extends Component {
  state = {
    breadcrumbsList: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (state.breadcrumbsList !== props.match.params.id) {
      switch (props.type) {
        case 'recipe':
          props.getRecipeBreadcrumbs(props.match.params.id);
          break;
        case 'article':
          props.getArticleBreadcrumbs(props.match.params.id);
          break;
        default:
          props.getBreadcrumbs(props.match.params.id);
      }
      return {
        ...state,
        breadcrumbsList: props.match.params.id,
      }
    }

    return state;
  }

  render() {
    const { breadcrumbsList } = this.props;
    return (
      <div className="breadcrumbs">
        <span><Link to={`/`}>Home page</Link></span>
        {
          breadcrumbsList.length > 0 ?
          breadcrumbsList.map((crumb, i, arr) => (
            (arr.length - 1 === i) ?
            <span key={crumb._id}>/{crumb.title}</span> :
            <span key={crumb._id}>/<Link to={`/category/${crumb._id}`}>{crumb.title}</Link></span>
          )) :
          null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  breadcrumbsList: state.breadcrumbsReducer.breadcrumbsList
});

const mapDispatchToProps = (dispatch) => ({
  getBreadcrumbs: (id) => dispatch(getListBreadcrumbs(id)),
  getRecipeBreadcrumbs: (id) => dispatch(getRecipeListBreadcrumbs(id)),
  getArticleBreadcrumbs: (id) => dispatch(getArticleListBreadcrumbs(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Breadcrumbs));
