import React, { Fragment } from 'react';

import { Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Button className="m-2" color="default">
        Default
      </Button>
      <Button className="m-2" color="primary">
        Primary
      </Button>
      <Button className="m-2" color="secondary">
        Secondary
      </Button>

      <div className="divider my-2" />

      <Button className="m-2" variant="contained" color="default">
        Default
      </Button>
      <Button className="m-2" variant="contained" color="primary">
        Primary
      </Button>
      <Button className="m-2" variant="contained" color="secondary">
        Secondary
      </Button>

      <div className="divider my-2" />

      <Button className="m-2 btn text-primary">Primary</Button>
      <Button className="m-2 btn text-first">Primary Alt</Button>
      <Button className="m-2 btn text-second">Secondary Alt</Button>
      <Button className="m-2 btn text-info">Info</Button>
      <Button className="m-2 btn text-success">Success</Button>
      <Button className="m-2 btn text-warning">Warning</Button>
      <Button className="m-2 btn text-danger">Danger</Button>
      <Button className="m-2 btn text-dark">Dark</Button>
    </Fragment>
  );
}
