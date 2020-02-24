import React, { Fragment } from 'react';

import { Grid, LinearProgress, Card } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="p-4 mb-4">
        <Grid container spacing={4} className="d-flex align-items-center">
          <Grid item xs={12} md={6}>
            <div className="text-black-50 pb-3">Project management</div>
            <div className="d-flex justify-content-center">
              <div>
                <div className="text-center font-size-lg px-5">
                  <span className="font-weight-bold">456</span>
                  <small className="text-black-50 d-block">Visitors</small>
                </div>
              </div>
              <div>
                <div className="text-center font-size-lg px-5">
                  <span className="font-weight-bold text-first">+34</span>
                  <small className="text-black-50 d-block">New users</small>
                </div>
              </div>
              <div>
                <div className="text-center font-size-lg px-5">
                  <span className="font-weight-bold">56%</span>
                  <small className="text-black-50 d-block">Increase</small>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="text-black-50 pb-3">Current progress</div>
            <LinearProgress
              variant="determinate"
              color="secondary"
              value={34}
            />
            <div className="align-box-row mt-1 text-muted">
              <div className="font-weight-bold">Orders</div>
              <div className="ml-auto">
                <div className="font-size-lg font-weight-bold text-success">
                  348
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Card>
    </Fragment>
  );
}
