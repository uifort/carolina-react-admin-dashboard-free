import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Card } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="icon-demo-box">
        <Card className="p-2 text-primary">
          <FontAwesomeIcon
            icon={['far', 'building']}
            className="font-size-xxl"
          />
        </Card>
        <Card className="p-2 text-success">
          <FontAwesomeIcon
            icon={['far', 'keyboard']}
            className="font-size-xxl"
          />
        </Card>
        <Card className="p-2 text-warning">
          <FontAwesomeIcon
            icon={['far', 'lightbulb']}
            className="font-size-xxl"
          />
        </Card>
        <Card className="p-2 text-danger">
          <FontAwesomeIcon
            icon={['far', 'comment-dots']}
            className="font-size-xxl"
          />
        </Card>
        <Card className="p-2 text-dark">
          <FontAwesomeIcon icon={['far', 'images']} className="font-size-xxl" />
        </Card>
        <Card className="p-2 text-info">
          <FontAwesomeIcon
            icon={['far', 'object-group']}
            className="font-size-xxl"
          />
        </Card>
        <Card className="p-2 text-first">
          <FontAwesomeIcon icon={['far', 'user']} className="font-size-xxl" />
        </Card>
        <Card className="p-2 text-second">
          <FontAwesomeIcon icon={['far', 'gem']} className="font-size-xxl" />
        </Card>
        <Card className="p-2">
          <FontAwesomeIcon icon={['far', 'clock']} className="font-size-xxl" />
        </Card>
        <Card className="p-2">
          <FontAwesomeIcon
            icon={['far', 'question-circle']}
            className="font-size-xxl"
          />
        </Card>
        <Card className="p-2">
          <FontAwesomeIcon
            icon={['far', 'file-video']}
            className="font-size-xxl"
          />
        </Card>
        <Card className="p-2">
          <FontAwesomeIcon
            icon={['far', 'chart-bar']}
            className="font-size-xxl"
          />
        </Card>
      </div>
    </Fragment>
  );
}
