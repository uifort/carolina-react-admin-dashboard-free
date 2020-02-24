import React, { Fragment } from 'react';

import { Grid, LinearProgress, Card } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="p-3 mb-4">
            <div className="align-box-row">
              <div className="text-first font-size-xl font-weight-bold pr-2">
                55%
              </div>
              <div className="flex-grow-1">
                <LinearProgress
                  className="progress-sm"
                  color="primary"
                  value={55}
                />
              </div>
            </div>
            <div className="text-black-50 pt-2">Expenses target</div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="p-3 mb-4">
            <div className="align-box-row">
              <div className="text-success font-size-xl font-weight-bold pr-2">
                76%
              </div>
              <div className="flex-grow-1">
                <LinearProgress
                  className="progress-sm"
                  color="secondary"
                  value={76}
                />
              </div>
            </div>
            <div className="text-black-50 pt-2">Sales target</div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="p-3 mb-4 bg-asteroid">
            <div className="align-box-row">
              <div className="text-danger font-size-xl font-weight-bold pr-2">
                61%
              </div>
              <div className="flex-grow-1">
                <LinearProgress
                  className="bg-white-50 progress-sm"
                  color="primary"
                  value={61}
                />
              </div>
            </div>
            <div className="text-white-50 pt-2">Income target</div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="p-3 mb-4 bg-midnight-bloom">
            <div className="align-box-row">
              <div className="text-warning font-size-xl font-weight-bold pr-2">
                83%
              </div>
              <div className="flex-grow-1">
                <LinearProgress
                  className="bg-white-50 progress-sm"
                  color="primary"
                  value={83}
                />
              </div>
            </div>
            <div className="text-white-50 pt-2">Spendings target</div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
