import React, { Fragment } from 'react';

import { Grid, Card, CardContent, Button } from '@material-ui/core';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <img alt="..." className="card-img-top" src={stock1} />
            <CardContent className="p-3">
              <h5 className="card-title font-weight-bold font-size-lg">
                Card title
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Button color="primary" variant="contained">
                Go somewhere
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <img alt="..." className="card-img-top" src={stock2} />
            <CardContent className="p-3">
              <h5 className="card-title font-weight-bold font-size-lg">
                Card title
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Button color="primary" variant="contained">
                Go somewhere
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="mb-4">
            <img alt="..." className="card-img-top" src={stock3} />
            <CardContent className="p-3">
              <h5 className="card-title font-weight-bold font-size-lg">
                Card title
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Button color="primary" variant="contained">
                Go somewhere
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
