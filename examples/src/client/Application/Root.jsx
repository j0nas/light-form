import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import 'sakura.css';
import Basic from '../routes/Basic';
import Nested from '../routes/Nested';
import DefaultState from '../routes/DefaultState';
import './Application.scss';

const Root = () =>
  <Router>
    <div>
      <nav>
        <Link to="/">Basic</Link>
        <br />
        <Link to="/nested">Nested</Link>
        <br />
        <Link to="/defaultstate">Default state</Link>
      </nav>

      <Route exact path="/" component={Basic} />
      <Route exact path="/nested" component={Nested} />
      <Route exact path="/defaultstate" component={DefaultState} />
    </div>
  </Router>;

export default Root;
