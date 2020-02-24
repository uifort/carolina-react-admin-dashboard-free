import React, { Fragment } from 'react';

import { Grid, Container, Button, Tooltip } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import hero9 from '../../assets/images/hero-bg/hero-5.jpg';

const LandingPage = () => {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-premium-dark min-vh-100">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-5"
            style={{ backgroundImage: 'url(' + hero9 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-3" />
          <div className="bg-composed-wrapper--bg bg-red-lights opacity-1" />
          <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
            <Container maxWidth="md" className="pb-5">
              <Grid container spacing={4}>
                <Grid
                  item
                  lg={10}
                  className="px-0 mx-auto d-flex align-items-center">
                  <div className="text-center">
                    <Tooltip arrow placement="top" title="Version: 1.0.0">
                      <span className="badge badge-success px-4 text-uppercase h-auto py-1">
                        FREE react Admin Dashboard Template
                      </span>
                    </Tooltip>
                    <div className="px-4 px-sm-0 text-white mt-4">
                      <h1 className="display-2 mb-5 font-weight-bold">
                        Carolina React Admin Dashboard with Material-UI Free
                      </h1>
                      <p className="font-size-xl text-white-50 mb-3">
                        This free React admin template is powered by Material-UI
                        components framework and features a clean and fresh
                        design following Google&#39;s Material Design
                        specifications.
                      </p>
                      <p className="text-white font-size-lg">
                        Curious about the features? We&#39;ve set up a live
                        preview for your viewing pleasure.
                      </p>
                      <div className="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50" />
                      <div>
                        <Button
                          to="/DashboardDefault"
                          component={Link}
                          size="large"
                          color="primary"
                          variant="contained"
                          className="m-2 py-3 px-5"
                          title="View Carolina React Admin Dashboard with Material-UI Free Live Preview">
                          <span className="btn-wrapper--label">Live Demo</span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                          </span>
                        </Button>
                        <Button
                          size="large"
                          color="secondary"
                          variant="contained"
                          href="https://themes.material-ui.com/themes/carolina-react-admin-dashboard-free"
                          className="m-2 py-3 px-5"
                          rel="noopener"
                          target="_blank"
                          title="Download Carolina React Admin Dashboard with Material-UI Free">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'download']} />
                          </span>
                          <span className="btn-wrapper--label">
                            Download now
                          </span>
                        </Button>
                        <Button
                          href="https://themes.material-ui.com/themes/carolina-react-admin-dashboard-pro"
                          rel="noopener"
                          target="_blank"
                          size="large"
                          className="m-2 py-3 px-5"
                          color="default"
                          variant="contained"
                          title="Learn more about Carolina React Admin Dashboard with Material-UI Free version">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'external-link-alt']}
                            />
                          </span>
                          <span className="btn-wrapper--label">
                            PRO Version
                          </span>
                        </Button>
                      </div>
                      <small className="d-block pt-4">
                        For a comprehensive list of components &amp; commercial
                        licenses, we recommend the PRO version.
                      </small>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
