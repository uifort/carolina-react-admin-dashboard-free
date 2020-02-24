import React, { Fragment } from 'react';

import { ButtonGroup, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <ButtonGroup size="small" className="m-2">
        <Button color="primary">Left</Button>
        <Button color="primary">Middle</Button>
        <Button color="primary">Right</Button>
      </ButtonGroup>

      <div className="divider my-2" />

      <ButtonGroup size="large" className="m-2">
        <Button color="primary">Left</Button>
        <Button color="primary">Middle</Button>
        <Button color="primary">Right</Button>
      </ButtonGroup>
    </Fragment>
  );
}
