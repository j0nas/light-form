import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Basic from '../routes/Basic';
import InputTypes from '../routes/InputTypes';
import Nested from '../routes/Nested';
import DefaultState from '../routes/DefaultState';
import InterceptOnChange from '../routes/InterceptOnChange';
import OnStateChange from '../routes/OnStateChange';
import AsyncValidation from '../routes/AsyncValidation';
import './Application.scss';

const Root = () =>
  (<Router>
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
        <br />
        <Link to="/onstatechange">OnStateChange/form validation</Link>
        <br />
        <Link to="/asyncvalidation">Async validation</Link>
      </nav>

      <p>
        <Route exact path="/" component={Basic} />
        <Route exact path="/inputtypes" component={InputTypes} />
        <Route exact path="/nested" component={Nested} />
        <Route exact path="/defaultstate" component={DefaultState} />
        <Route exact path="/interceptonchange" component={InterceptOnChange} />
        <Route exact path="/onstatechange" component={OnStateChange} />
        <Route exact path="/asyncvalidation" component={AsyncValidation} />
      </p>
    </div>
  </Router>);

export default Root;
