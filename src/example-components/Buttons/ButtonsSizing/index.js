import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Button size="small" variant="contained" color="default" className="m-2">
        Button
      </Button>
      <Button variant="contained" color="primary" className="m-2">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['far', 'lightbulb']} />
        </span>
        <span className="btn-wrapper--label">Left icon</span>
      </Button>
      <Button
        size="large"
        variant="contained"
        color="secondary"
        className="m-2">
        <span className="btn-wrapper--label">Right icon</span>
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['far', 'keyboard']} />
        </span>
      </Button>
    </Fragment>
  );
}
