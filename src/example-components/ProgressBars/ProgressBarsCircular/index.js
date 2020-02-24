import React, { Fragment } from 'react';

import { Grid, CircularProgress } from '@material-ui/core';

export default function LivePreviewExample() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Fragment>
      <Grid container spacing={4} className="text-center">
        <Grid
          item
          sm={6}
          className="d-flex align-items-center justify-content-center">
          <div className="m-3">
            <CircularProgress />
          </div>
          <div className="m-3">
            <CircularProgress color="secondary" />
          </div>
        </Grid>
        <Grid
          item
          sm={6}
          className="d-flex align-items-center justify-content-center">
          <div className="m-3">
            <CircularProgress variant="determinate" value={progress} />
          </div>
          <div className="m-3">
            <CircularProgress
              variant="determinate"
              value={progress}
              color="secondary"
            />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
