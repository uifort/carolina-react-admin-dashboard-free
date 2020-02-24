import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Tooltip } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Button variant="contained" color="primary" className="m-2">
        <FontAwesomeIcon icon={['far', 'bell']} />
        <span className="ml-3 badge badge-warning">
          <b>23</b> New
        </span>
      </Button>
      <Tooltip arrow title="Tooltip Example!" placement="top">
        <Button variant="contained" color="secondary">
          <span className="mr-3 badge badge-second">New</span>
          <span>
            <FontAwesomeIcon icon={['far', 'lightbulb']} />
          </span>
        </Button>
      </Tooltip>
      <Button variant="contained" color="primary" className="m-2">
        <FontAwesomeIcon icon={['far', 'keyboard']} />
        <span className="badge-warning ml-3 badge">
          <b>65</b>
        </span>
      </Button>
      <Button variant="contained" color="secondary" className="m-2">
        <FontAwesomeIcon icon={['far', 'bell']} />
        <span className="ml-3 badge badge-success">Info</span>
      </Button>
    </Fragment>
  );
}
