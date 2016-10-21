import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import Home from './components/Home';
import BlogIndex from './components/blog/BlogIndex';
import Blog from './components/blog/Blog';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="/blog" >
      <IndexRoute component={BlogIndex}/>
      <Route path="/blog/:id" component={Blog}/>
    </Route>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
