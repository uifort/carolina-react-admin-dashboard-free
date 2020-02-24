import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

const PresentationLayout = props => {
  const { children } = props;

  return <Fragment>{children}</Fragment>;
};

PresentationLayout.propTypes = {
  children: PropTypes.node
};

export default PresentationLayout;
