import React, { Fragment } from 'react';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const series = [44, 55, 67, 83];
  const options = {
    chart: {
      height: 350,
      type: 'radialBar'
    },

    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px'
          },
          value: {
            fontSize: '16px'
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function() {
              return 249;
            }
          }
        }
      }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries']
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height={350}
        />
      </div>
    </Fragment>
  );
}
