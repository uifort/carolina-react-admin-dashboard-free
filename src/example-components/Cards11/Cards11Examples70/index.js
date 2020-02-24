import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  LinearProgress,
  Card,
  Button,
  List,
  ListItem
} from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <b>Monthly targets</b>
                <div className="d-block text-capitalize mt-1 font-size-sm">
                  Card with progress bars list items.
                </div>
              </div>
            </div>
            <List>
              <ListItem className="py-2 d-block">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Orders</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-success">
                      348
                    </div>
                  </div>
                </div>
                <LinearProgress
                  className="progress-animated-alt"
                  color="secondary"
                  value={34}
                />
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </ListItem>
              <ListItem className="py-2 d-block">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Sales</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-danger">
                      <small>$</small>
                      2.3M
                    </div>
                  </div>
                </div>
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={39}
                />
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </ListItem>
              <ListItem className="py-2 d-block">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Users</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-info">
                      <small>#</small>
                      87
                    </div>
                  </div>
                </div>
                <LinearProgress
                  className="progress-animated-alt"
                  color="primary"
                  value={51}
                />
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </ListItem>
            </List>
            <div className="card-footer bg-light p-4 text-center">
              <Button color="primary" variant="contained">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </span>
                <span className="btn-wrapper--label">View details</span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Progress</small>
                <b>Users Analytics</b>
              </div>
              <div className="card-header--actions">
                <div className="badge badge-warning">Pending</div>
              </div>
            </div>
            <List>
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={61}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-success">
                      <small className="pr-1 text-black-50">$</small>
                      1,628
                    </b>
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <LinearProgress
                      variant="determinate"
                      color="primary"
                      value={44}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-info">
                      <small className="text-black-50 pr-1">$</small>
                      7,389
                    </b>
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="primary"
                      variant="determinate"
                      value={29}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-danger">
                      <small className="text-black-50 pr-1">$</small>
                      8,493
                    </b>
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={38}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-warning">
                      <small className="text-black-50 pr-1">$</small>
                      2,594
                    </b>
                  </div>
                </div>
              </ListItem>
            </List>
            <div className="card-footer bg-light text-center">
              <Button variant="contained" color="primary">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </span>
                <span className="btn-wrapper--label">Generate reports</span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
