import React, { Fragment } from 'react';

import { TextField } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <form noValidate autoComplete="off">
        <div>
          <TextField
            fullWidth
            className="m-3"
            error
            id="standard-error"
            label="Error"
            defaultValue="Hello World"
          />
          <TextField
            fullWidth
            className="m-3"
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </div>
        <div>
          <TextField
            fullWidth
            className="m-3"
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            fullWidth
            className="m-3"
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
          />
        </div>
        <div>
          <TextField
            fullWidth
            className="m-3"
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            fullWidth
            className="m-3"
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="outlined"
          />
        </div>
      </form>
    </Fragment>
  );
}
