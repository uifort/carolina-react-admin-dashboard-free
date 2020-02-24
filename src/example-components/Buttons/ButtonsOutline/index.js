import React, { Fragment } from 'react';

import { Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary" className="m-2">
        Primary
      </Button>
      <Button variant="outlined" color="secondary" className="m-2">
        Secondary
      </Button>
      <Button variant="outlined" disabled className="m-2">
        Disabled
      </Button>
      <Button
        variant="outlined"
        color="primary"
        href="#outlined-buttons"
        className="m-2">
        Link
      </Button>
    </Fragment>
  );
}
