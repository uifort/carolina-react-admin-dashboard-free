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

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import Chart from 'react-apexcharts';
export default function LivePreviewExample() {
  const chart53Options = {
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
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#f4772e'
    },
    colors: ['#f4772e'],
    legend: {
      show: false
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart53Data = [
    {
      name: 'Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];
  return (
    <Fragment>
      <Card className="card-box mb-4 p-3 text-center">
        <div className="my-3">
          <h6 className="font-weight-bold font-size-lg mb-1 text-black">
            Revenue progress
          </h6>
          <p className="text-black-50 mb-0">
            Our company revenues, split by progress.
          </p>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar1} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Marion Devine</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={['fas', 'star']}
                className="text-warning mr-1"
              />
              <span>4.8</span>
              <span className="px-1">|</span>
              34 Jobs
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar2} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Monique Hanna</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={['fas', 'star']}
                className="text-warning mr-1"
              />
              <span>5.0</span>
              <span className="px-1">|</span>
              81 Jobs
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar3} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Celine Goulding</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={['fas', 'star']}
                className="text-warning mr-1"
              />
              <span>2.9</span>
              <span className="px-1">|</span>
              52 Jobs
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar4} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Anabel Mayo</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={['fas', 'star']}
                className="text-warning mr-1"
              />
              <span>4.6</span>
              <span className="px-1">|</span>
              76 Jobs
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar5} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Rueben Hays</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={['fas', 'star']}
                className="text-warning mr-1"
              />
              <span>4.8</span>
              <span className="px-1">|</span>
              76 Jobs
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar6} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Kush Malone</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={['fas', 'star']}
                className="text-warning mr-1"
              />
              <span>3.5</span>
              <span className="px-1">|</span>
              34 Jobs
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar7} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Haydn Porter</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={['fas', 'star']}
                className="text-warning mr-1"
              />
              <span>4.5</span>
              <span className="px-1">|</span>
              23 Jobs
            </div>
          </div>
        </div>
      </Card>
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
                <Grid item xs={12} md={4}>
                  <div className="text-center">
                    <span className="text-black-50 d-block">Users</span>
                    <b className="font-size-xxl">2,345</b>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="text-center">
                    <span className="text-black-50 d-block">Revenue</span>
                    <b className="font-size-xxl">$9,693</b>
                  </div>
                </Grid>
                <Grid item xs={12} md={4} className="align-box-row">
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
                <Grid item xs={12} md={4}>
                  <div className="text-center">
                    <span className="text-black-50 d-block">Users</span>
                    <b className="font-size-xxl">2,345</b>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="text-center">
                    <span className="text-black-50 d-block">Revenue</span>
                    <b className="font-size-xxl">$9,693</b>
                  </div>
                </Grid>
                <Grid item xs={12} md={4} className="align-box-row">
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
            <List>
              <ListItem className="d-block p-0">
                <Divider />
                <div className="card-header rounded-0 bg-light">
                  <div className="font-size-lg d-block text-truncate">
                    <span className="text-black-50 pr-2">#34</span> Hackathon
                  </div>
                  <div className="ml-auto d-flex align-items-center align-content-center">
                    <Tooltip arrow title="View all participants">
                      <Button
                        color="primary"
                        className="font-size-lg ml-3 d-40 p-0 rounded-circle border-0">
                        <AddCircleTwoToneIcon />
                      </Button>
                    </Tooltip>
                  </div>
                </div>
                <CardContent className="p-3">
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                      <div className="text-center">
                        <span className="text-black-50 d-block">Users</span>
                        <b className="font-size-xxl">2,345</b>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <div className="text-center">
                        <span className="text-black-50 d-block">Revenue</span>
                        <b className="font-size-xxl">$9,693</b>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={4} className="align-box-row">
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
              <ListItem className="d-block p-0">
                <div className="card-header">
                  <div className="font-size-lg d-block text-truncate">
                    <span className="text-black-50 pr-2">#33</span> Gaming
                    center
                  </div>
                  <div className="ml-auto d-flex align-items-center align-content-center">
                    <Tooltip arrow title="View all participants">
                      <Button
                        color="primary"
                        className="font-size-lg ml-3 d-40 p-0 rounded-circle border-0">
                        <AddCircleTwoToneIcon />
                      </Button>
                    </Tooltip>
                  </div>
                </div>
                <CardContent className="p-3">
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                      <div className="text-center">
                        <span className="text-black-50 d-block">Users</span>
                        <b className="font-size-xxl">1,466</b>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <div className="text-center">
                        <span className="text-black-50 d-block">Revenue</span>
                        <b className="font-size-xxl text-danger">$6,465</b>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={4} className="align-box-row">
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
              <div className="py-2">
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
              <div className="py-2">
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
              <div className="py-2">
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
              </div>
              <div className="card-header border-0 d-block">
                <span className="text-uppercase pb-1 pt-1 text-black d-block text-center font-weight-bold font-size-lg">
                  Charts
                </span>
              </div>
              <Chart
                options={chart53Options}
                series={chart53Data}
                type="area"
                height={155}
              />
            </div>
            <div className="card-footer d-block text-center">
              <Tooltip arrow title="Refresh">
                <Button variant="contained" color="secondary">
                  <FontAwesomeIcon icon={['fas', 'cog']} spin />
                </Button>
              </Tooltip>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
