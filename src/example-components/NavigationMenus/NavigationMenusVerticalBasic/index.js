import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Typography,
  Card,
  List,
  ListItem,
  Divider
} from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <div className="heading-3 text-center">Default style</div>
          <Card className="card-box rounded-0 border-2 mb-3">
            <List className=" flex-column py-2">
              <ListItem button>
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'chart-bar']} />
                </div>
                <span>Services</span>
              </ListItem>
              <ListItem button>
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </div>
                <span>Layouts</span>
                <span className="ml-auto badge badge-warning">512</span>
              </ListItem>
              <ListItem button>
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'user-circle']} />
                </div>
                <span>Reports</span>
              </ListItem>
              <Typography className="text-black py-2 px-3" component="div">
                Others
              </Typography>
              <ListItem button>
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'object-group']} />
                </div>
                <span>Components</span>
              </ListItem>
              <Divider />
              <ListItem button>
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'chart-bar']} />
                </div>
                <span>Services</span>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className="heading-3 text-center">Alternate style</div>
          <Card className="card-box rounded-0 border-2 mb-3">
            <List className="p-3">
              <ListItem button className="rounded-sm">
                <span>My Account</span>
              </ListItem>
              <ListItem button className="rounded-sm">
                <span>Profile settings</span>
                <span className="ml-auto badge badge-first">23</span>
              </ListItem>
              <ListItem button className="rounded-sm">
                <span>Active tasks</span>
              </ListItem>
              <Typography
                className="text-black py-2 px-3 font-weight-bold"
                variant="body2"
                component="div">
                Heading
              </Typography>
              <ListItem button className="rounded-sm">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'bell']} />
                </div>
                <span>Customers</span>
              </ListItem>
              <Divider className="my-2" />
              <ListItem button className="rounded-sm">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'eye']} />
                </div>
                <span>Statistics</span>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className="heading-3 text-center">Rounded corners</div>
          <Card className="card-box rounded-0 border-2 mb-3">
            <List className="p-3">
              <ListItem button className="rounded-lg">
                <span>My Account</span>
              </ListItem>
              <ListItem button className="rounded-lg">
                <span>Profile settings</span>
              </ListItem>
              <ListItem button className="rounded-lg">
                <span>Active tasks</span>
                <span className="ml-auto badge badge-success">New</span>
              </ListItem>
              <Typography
                className="text-black py-2 px-3 font-weight-bold"
                variant="body2"
                component="div">
                Heading
              </Typography>
              <ListItem button className="rounded-lg">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'bell']} />
                </div>
                <span>Customers</span>
              </ListItem>
              <Divider className="my-2" />
              <ListItem button className="rounded-lg">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'eye']} />
                </div>
                <span>Statistics</span>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
