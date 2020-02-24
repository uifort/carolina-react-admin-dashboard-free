import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  IconButton,
  LinearProgress,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const chart2Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '70%'
      }
    },
    stroke: {
      show: true,
      color: '#f4772e',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#f4772e',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: ['#f4772e'],
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart2Data = [
    {
      name: 'Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={7}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="font-size-lg d-block text-truncate">
                <span className="text-black-50 pr-2">#32</span> Global
                competition
              </div>
              <div className="ml-auto d-flex align-items-center align-content-center">
                <Tooltip arrow title="View all participants">
                  <IconButton color="primary" className="ml-3">
                    <AddCircleTwoToneIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <CardContent className="p-3">
              <Grid container spacing={4}>
                <Grid item xs={12} lg={4} md={6}>
                  <div className="text-center">
                    <span className="text-black-50 d-block">Users</span>
                    <b className="font-size-xxl">2,345</b>
                  </div>
                </Grid>
                <Grid item xs={12} lg={4} md={6}>
                  <div className="text-center">
                    <span className="text-black-50 d-block">Revenue</span>
                    <b className="font-size-xxl">$9,693</b>
                  </div>
                </Grid>
                <Grid item xs={12} md={12} lg={4} className="align-box-row">
                  <div className="w-100 mt-3 mt-md-0">
                    <div className="mb-1">
                      <span className="text-black-50 pr-1">Progress:</span>
                      <span className="text-danger">-12</span>
                    </div>
                    <LinearProgress variant="determinate" value={67} />
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="font-size-lg d-block text-truncate">
                <span className="text-black-50 pr-2">#33</span> International
                Event
              </div>
              <div className="ml-auto d-flex align-items-center align-content-center">
                <Tooltip arrow title="View all participants">
                  <IconButton color="primary" className="ml-3">
                    <AddCircleTwoToneIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <CardContent className="p-3">
              <Grid container spacing={4}>
                <Grid item xs={12} lg={4} md={6}>
                  <div className="text-center">
                    <span className="text-black-50 d-block">Users</span>
                    <b className="font-size-xxl">2,345</b>
                  </div>
                </Grid>
                <Grid item xs={12} lg={4} md={6}>
                  <div className="text-center">
                    <span className="text-black-50 d-block">Revenue</span>
                    <b className="font-size-xxl">$9,693</b>
                  </div>
                </Grid>
                <Grid item xs={12} md={12} lg={4} className="align-box-row">
                  <div className="w-100 mt-3 mt-md-0">
                    <div className="mb-1">
                      <span className="text-black-50 pr-1">Progress:</span>
                      <span className="text-danger">-12</span>
                    </div>
                    <LinearProgress variant="determinate" value={67} />
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card className="card-box mb-4">
            <List tag="div">
              <ListItem tag="div" className="p-0 d-block">
                <div className="card-header">
                  <div className="font-size-lg d-block text-truncate">
                    <span className="text-black-50 pr-2">#34</span> Hackathon
                  </div>
                  <div className="ml-auto d-flex align-items-center align-content-center">
                    <Tooltip arrow title="View all participants">
                      <IconButton color="primary" className="ml-3">
                        <AddCircleTwoToneIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
                <CardContent className="p-3">
                  <Grid container spacing={4}>
                    <Grid item xs={12} lg={4} md={6}>
                      <div className="text-center">
                        <span className="text-black-50 d-block">Users</span>
                        <b className="font-size-xxl">2,345</b>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4} md={6}>
                      <div className="text-center">
                        <span className="text-black-50 d-block">Revenue</span>
                        <b className="font-size-xxl">$9,693</b>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4} className="align-box-row">
                      <div className="w-100 mt-3 mt-md-0">
                        <div className="mb-1">
                          <span className="text-black-50 pr-1">Progress:</span>
                          <span className="text-danger">-12</span>
                        </div>
                        <LinearProgress value={43} />
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </ListItem>
              <Divider />
              <ListItem tag="div" className="p-0 d-block">
                <div className="card-header">
                  <div className="font-size-lg d-block text-truncate">
                    <span className="text-black-50 pr-2">#33</span> Gaming
                    center
                  </div>
                  <div className="ml-auto d-flex align-items-center align-content-center">
                    <Tooltip arrow title="View all participants">
                      <IconButton color="primary" className="ml-3">
                        <AddCircleTwoToneIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
                <CardContent className="p-3">
                  <Grid container spacing={4}>
                    <Grid item xs={12} lg={4} md={6}>
                      <div className="text-center">
                        <span className="text-black-50 d-block">Users</span>
                        <b className="font-size-xxl">1,466</b>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4} md={6}>
                      <div className="text-center">
                        <span className="text-black-50 d-block">Revenue</span>
                        <b className="font-size-xxl text-danger">$6,465</b>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4} className="align-box-row">
                      <div className="w-100 mt-3 mt-md-0">
                        <div className="mb-1">
                          <span className="text-black-50">Progress:</span>
                          <span className="text-warning">-5</span>
                        </div>
                        <LinearProgress value={72} />
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Card className="card-box mb-4">
            <div className="px-4 px-xl-5 pb-1">
              <div className="card-header d-block">
                <span className="text-uppercase py-3 py-xl-4 text-black d-block text-center font-weight-bold font-size-lg">
                  Inventory
                </span>
              </div>
              <CardContent className="p-0">
                <div className="grid-menu grid-menu-2col">
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                      <div className="text-center">
                        <FontAwesomeIcon
                          icon={['fas', 'lemon']}
                          className="font-size-xxl text-warning my-3"
                        />
                        <span className="text-black-50 d-block">Users</span>
                        <b className="font-size-xxl">2,345</b>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <div className="text-center">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-xxl text-success my-3"
                        />
                        <span className="text-black-50 d-block">Revenue</span>
                        <b className="font-size-xxl">$9,693</b>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
              <div className="card-header border-0 d-block">
                <span className="text-uppercase pt-4 pb-2 text-black d-block text-center font-weight-bold font-size-lg">
                  Activity
                </span>
              </div>
              <div>
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <LinearProgress value={43} color="secondary" />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <b className="font-size-lg text-success">
                      <small className="text-black-50 pr-1">$</small>
                      1,754
                    </b>
                  </div>
                </div>
              </div>
              <div>
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <LinearProgress value={61} color="primary" />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <b className="font-size-lg text-info">
                      <small className="text-black-50 pr-1">$</small>
                      7,428
                    </b>
                  </div>
                </div>
              </div>
              <div className="align-box-row">
                <div className="flex-grow-1">
                  <LinearProgress value={22} color="primary" />
                </div>
                <div className="line-height-sm text-center ml-4">
                  <b className="font-size-lg text-danger">
                    <small className="text-black-50">$</small>
                    5,358
                  </b>
                </div>
              </div>

              <div className="card-header border-0 d-block">
                <span className="text-uppercase pb-1 pt-1 text-black d-block text-center font-weight-bold font-size-lg">
                  Charts
                </span>
              </div>
              <Chart
                options={chart2Options}
                series={chart2Data}
                type="area"
                height={150}
              />
              <div className="card-footer d-block text-center">
                <Tooltip arrow title="Refresh">
                  <Button variant="contained" color="secondary">
                    <FontAwesomeIcon icon={['fas', 'cog']} spin />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
