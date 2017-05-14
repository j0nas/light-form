import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import 'sakura.css';
import Basic from '../routes/Basic';
import InputTypes from '../routes/InputTypes';
import Nested from '../routes/Nested';
import DefaultState from '../routes/DefaultState';
import InterceptOnChange from '../routes/InterceptOnChange';
import './Application.scss';

const Root = () =>
  <Router>
    <div>
      <nav>
        <Link to="/">Basic</Link>
        <br />
        <Link to="/inputtypes">Input types</Link>
        <br />
        <Link to="/nested">Nested</Link>
        <br />
        <Link to="/defaultstate">Default state</Link>
        <br />
        <Link to="/interceptonchange">Intercept OnChange</Link>
      </nav>

      <Route exact path="/" component={Basic} />
      <Route exact path="/inputtypes" component={InputTypes} />
      <Route exact path="/nested" component={Nested} />
      <Route exact path="/defaultstate" component={DefaultState} />
      <Route exact path="/interceptonchange" component={InterceptOnChange} />
    </div>
  </Router>;

export default Root;
