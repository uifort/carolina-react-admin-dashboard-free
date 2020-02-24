import React, { Fragment } from 'react';

import { Grid, Card, Button } from '@material-ui/core';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-transparent mb-4">
            <div className="card-img-wrapper">
              <img src={stock1} className="card-img-top rounded" alt="..." />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title font-weight-bold font-size-lg">
                Card title
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                className="mt-1">
                View Details
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-transparent mb-4">
            <div className="card-img-wrapper">
              <img src={stock2} className="card-img-top rounded" alt="..." />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title font-weight-bold font-size-lg">
                Card title
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                className="mt-1">
                View Details
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-transparent mb-4">
            <div className="card-img-wrapper">
              <img src={stock3} className="card-img-top rounded" alt="..." />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title font-weight-bold font-size-lg">
                Card title
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                className="mt-1">
                View Details
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
