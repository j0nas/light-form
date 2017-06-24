import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ExampleDescription extends PureComponent {
  render() {
    return (
      <div style={{ color: '#666' }}>
        <div>
          <em>examples/src/client/routes/{this.props.route}.jsx</em>
        </div>
        <div>{this.props.description}</div>
        <br />
      </div>
    );
  }
}

ExampleDescription.propTypes = {
  route: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExampleDescription;
