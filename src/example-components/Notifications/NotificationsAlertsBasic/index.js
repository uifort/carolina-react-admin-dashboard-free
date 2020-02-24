import React, { Fragment } from 'react';

import MuiAlert from '@material-ui/lab/Alert';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <MuiAlert className="mb-4" severity="success">
        <div className="d-flex align-items-center align-content-center">
          <span>
            <strong className="d-block">Success!</strong> This is a success
            alert—check it out!
          </span>
        </div>
      </MuiAlert>
      <MuiAlert className="mb-4" severity="info">
        <div className="d-flex align-items-center align-content-center">
          <span>
            <strong className="d-block">Info!</strong> This is an info
            alert—check it out!
          </span>
        </div>
      </MuiAlert>
      <MuiAlert className="mb-4" severity="warning">
        <div className="d-flex align-items-center align-content-center">
          <span>
            <strong className="d-block">Warning!</strong> This is a warning
            alert—check it out!
          </span>
        </div>
      </MuiAlert>
      <MuiAlert className="mb-4" severity="error">
        <div className="d-flex align-items-center align-content-center">
          <span>
            <strong className="d-block">Danger!</strong> This is an error
            alert—check it out!
          </span>
        </div>
      </MuiAlert>
    </Fragment>
  );
}
