import React, { Fragment } from 'react';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const options = {
    labels: ['A', 'B', 'C', 'D', 'E']
  };
  const series = [44, 55, 41, 17, 15];

  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <Chart options={options} series={series} type="donut" width="380" />
      </div>
    </Fragment>
  );
}
