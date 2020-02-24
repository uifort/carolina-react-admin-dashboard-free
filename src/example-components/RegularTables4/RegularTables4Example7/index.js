import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Avatar,
  IconButton,
  Box,
  Checkbox,
  Card,
  CardContent,
  Button
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header">
          <div className="card-header--title">
            <small>Tables</small>
            <b>This table card has custom content</b>
          </div>
          <Box className="card-header--actions">
            <IconButton
              size="small"
              color="primary"
              className="text-primary"
              title="View details">
              <FontAwesomeIcon
                icon={['far', 'keyboard']}
                className="font-size-lg"
              />
            </IconButton>
          </Box>
        </div>
        <CardContent className="p-0">
          <div className="table-responsive">
            <table className="table table-striped table-hover text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: '40%' }}>Employee</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar2} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="h-auto py-0 px-3 badge badge-warning">
                      Pending
                    </div>
                  </td>
                  <td className="text-center">
                    <Box>
                      <IconButton color="primary" size="small">
                        <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                      </IconButton>
                    </Box>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar1} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Beck Simpson
                        </a>
                        <span className="text-black-50 d-block">
                          Frontend Developer
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-success h-auto py-0 px-3">
                      Completed
                    </div>
                  </td>
                  <td className="text-center">
                    <Box>
                      <IconButton color="primary" size="small">
                        <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                      </IconButton>
                    </Box>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar3} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Regan Norris
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Project Manager
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="h-auto py-0 px-3 badge badge-danger">
                      Declined
                    </div>
                  </td>
                  <td className="text-center">
                    <Box>
                      <IconButton color="primary" size="small">
                        <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                      </IconButton>
                    </Box>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="card-box mb-4">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
              Users list
            </h4>
          </div>
        </div>
        <div className="card-body px-0 pt-2 pb-3">
          <table className="table table-hover table-borderless table-alternate text-nowrap mb-0">
            <thead>
              <tr>
                <th>Software</th>
                <th className="text-center">Income</th>
                <th className="text-center">Expenses</th>
                <th className="text-center">Status</th>
                <th className="text-right">Totals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex">
                    <Checkbox className="align-self-center mr-3" />
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Isaiah Ruiz
                      </a>
                      <span className="text-black-50 d-block">
                        Senior Web Developer
                      </span>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="font-weight-bold text-danger">-$254</span>
                </td>
                <td className="text-center">
                  <span className="text-danger font-weight-bold">-2,374</span>
                </td>
                <td className="text-center">
                  <span className="badge badge-danger">Overdue</span>
                </td>
                <td className="text-right">
                  <div className="d-flex align-items-center justify-content-end">
                    <div className="font-weight-bold font-size-lg pr-2">
                      2363
                    </div>
                    <FontAwesomeIcon
                      icon={['fas', 'arrow-down']}
                      className="font-size-sm opacity-5"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex">
                    <Checkbox className="align-self-center mr-3" />
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Inez Conley
                      </a>
                      <span className="text-black-50 d-block">
                        Project Manager
                      </span>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="font-weight-bold">$18,386</span>
                </td>
                <td className="text-center">
                  <span className="text-danger font-weight-bold">-6,310</span>
                </td>
                <td className="text-center">
                  <span className="badge badge-warning">Pending</span>
                </td>
                <td className="text-right">
                  <div className="d-flex align-items-center justify-content-end">
                    <div className="font-weight-bold font-size-lg pr-2">
                      584
                    </div>
                    <FontAwesomeIcon
                      icon={['fas', 'arrow-down']}
                      className="font-size-sm opacity-5"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex">
                    <Checkbox className="align-self-center mr-3" />
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Adyan Sosa
                      </a>
                      <span className="text-black-50 d-block">
                        User Experience Designer
                      </span>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="font-weight-bold">$6,356</span>
                </td>
                <td className="text-center">
                  <span className="text-warning">-374</span>
                </td>
                <td className="text-center">
                  <span className="badge badge-first">Waiting</span>
                </td>
                <td className="text-right">
                  <div className="d-flex align-items-center justify-content-end">
                    <div className="font-weight-bold font-size-lg pr-2">
                      483
                    </div>
                    <FontAwesomeIcon
                      icon={['fas', 'arrow-up']}
                      className="font-size-sm opacity-5"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex">
                    <Checkbox className="align-self-center mr-3" />
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Beck Simpson
                      </a>
                      <span className="text-black-50 d-block">
                        Senior Consultant
                      </span>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="font-weight-bold">$16,281</span>
                </td>
                <td className="text-center">
                  <span className="text-success">+684</span>
                </td>
                <td className="text-center">
                  <span className="badge badge-success">Done</span>
                </td>
                <td className="text-right">
                  <div className="d-flex align-items-center justify-content-end">
                    <div className="font-weight-bold font-size-lg pr-2">
                      {' '}
                      $12,23M
                    </div>
                    <FontAwesomeIcon
                      icon={['fas', 'arrow-up']}
                      className="font-size-sm opacity-5"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="divider mb-3" />
          <div className="text-center">
            <Button color="primary">
              <span className="btn-wrapper--label">View details</span>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </span>
            </Button>
          </div>
        </div>
      </Card>
    </Fragment>
  );
}
