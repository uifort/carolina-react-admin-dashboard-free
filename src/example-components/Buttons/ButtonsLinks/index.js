import React, { Fragment } from 'react';

import { Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Button color="primary" className="m-2 text-primary">
        <span>Primary</span>
      </Button>
      <Button color="primary" className="m-2 text-first">
        <span>Primary Alt</span>
      </Button>
      <Button color="primary" className="m-2 text-second">
        <span>Secondary Alt</span>
      </Button>

      <Button color="primary" className="m-2 text-info">
        <span>Info</span>
      </Button>
      <Button color="primary" className="m-2 text-success">
        <span>Success</span>
      </Button>
      <Button color="primary" className="m-2 text-warning">
        <span>Warning</span>
      </Button>
      <Button color="primary" className="m-2 text-danger">
        <span>Danger</span>
      </Button>
      <Button color="primary" className="m-2 text-dark">
        <span>Dark</span>
      </Button>
    </Fragment>
  );
}
