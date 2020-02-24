import React, { Fragment } from 'react';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div>
        <div className="mb-4 progress progress-sm">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '15%' }}
          />
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '20%' }}
          />
          <div
            className="progress-bar bg-info"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '25%' }}
          />
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '20%' }}
          />
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '15%' }}
          />
        </div>
        <div className="mb-4 progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '15%' }}>
            Meh
          </div>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="35"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '35%' }}>
            Wow!
          </div>
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '25%' }}>
            25%
          </div>
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '25%' }}>
            LOOK OUT!!
          </div>
        </div>
        <div className="progress progress-lg">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '15%' }}>
            Stripes
          </div>
          <div
            className="progress-bar progress-bar-animated bg-success progress-bar-striped"
            role="progressbar"
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '30%' }}>
            Animated Stripes
          </div>
          <div
            className="progress-bar bg-info"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '25%' }}>
            Plain
          </div>
        </div>
      </div>
    </Fragment>
  );
}
