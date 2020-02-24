import React, { Fragment } from 'react';

import { Card } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="icon-demo-box">
        <Card className="p-2 text-primary">
          <span className="pe-7s-rocket font-size-xxl"></span>
        </Card>
        <Card className="p-2 text-success">
          <span className="pe-7s-hourglass font-size-xxl"></span>
        </Card>
        <Card className="p-2 text-warning">
          <span className="pe-7s-settings font-size-xxl"></span>
        </Card>
        <Card className="p-2 text-danger">
          <span className="pe-7s-leaf font-size-xxl"></span>
        </Card>
        <Card className="p-2 text-dark">
          <span className="pe-7s-piggy font-size-xxl"></span>
        </Card>
        <Card className="p-2 text-info">
          <span className="pe-7s-id font-size-xxl"></span>
        </Card>
        <Card className="p-2 text-first">
          <span className="pe-7s-world font-size-xxl"></span>
        </Card>
        <Card className="p-2 text-second">
          <span className="pe-7s-cloud-download font-size-xxl"></span>
        </Card>
        <Card className="p-2">
          <span className="pe-7s-umbrella font-size-xxl"></span>
        </Card>
        <Card className="p-2">
          <span className="pe-7s-shield font-size-xxl"></span>
        </Card>
        <Card className="p-2">
          <span className="pe-7s-radio font-size-xxl"></span>
        </Card>
        <Card className="p-2">
          <span className="pe-7s-medal font-size-xxl"></span>
        </Card>
      </div>
    </Fragment>
  );
}
