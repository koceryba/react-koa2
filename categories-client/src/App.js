import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import LeftSideBar from './component/core/nav/leftSideBar'
import CategoryPage from './page/categoryPage';
import RecipePage from './page/recipePage';
import ArticlePage from './page/articlePage';
import HomePage from './page/homePage';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <LeftSideBar />
        <div className="app-content">
          <Switch>
            <Route path="/article/:id">
              <ArticlePage />
            </Route>
            <Route path="/recipe/:id">
              <RecipePage />
            </Route>
            <Route path="/category/:id">
              <CategoryPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
