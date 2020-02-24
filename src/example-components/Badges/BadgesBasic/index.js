import React, { Fragment } from 'react';

import { Badge } from '@material-ui/core';

import MailIcon from '@material-ui/icons/Mail';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <span className="m-1 badge badge-primary">Primary</span>
      <span className="m-1 badge badge-second">Secondary</span>
      <span className="m-1 badge badge-success">Success</span>
      <span className="m-1 badge badge-danger">Danger</span>
      <span className="m-1 badge badge-warning">Warning</span>
      <span className="m-1 badge badge-info">Info</span>
      <span className="m-1 badge badge-dark">Dark</span>

      <div className="divider my-4" />

      <span className="p-2">
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
      </span>
      <span className="p-2">
        <Badge badgeContent={4} color="secondary">
          <MailIcon />
        </Badge>
      </span>
      <span className="p-2">
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </span>
    </Fragment>
  );
}
