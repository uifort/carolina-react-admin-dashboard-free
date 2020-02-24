import React, { Fragment } from 'react';

import { ButtonGroup, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <ButtonGroup>
        <Button color="primary">Left</Button>
        <Button color="primary">Middle</Button>
        <Button color="primary">Right</Button>
      </ButtonGroup>
    </Fragment>
  );
}
