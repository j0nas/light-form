import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import View from './View';

const Container = connect(
    state => ({ state }),
    null,
    (state, dispatch, ownProps) => ({
      state: state.state[ownProps.nodeName],
      nodeName: ownProps.nodeName,
    }),
)(View);

Container.propTypes = {
  nodeName: PropTypes.string.isRequired,
};

export default Container;
