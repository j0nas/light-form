import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Basic from '../routes/Basic';
import Nested from '../routes/Nested';
import './Application.scss';

const Root = () =>
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nested">Nested</Link></li>
      </ul>

      <Route exact path="/" component={Basic} />
      <Route exact path="/nested" component={Nested} />
    </div>
  </Router>;

export default Root;
