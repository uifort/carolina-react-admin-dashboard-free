import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Card } from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
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
    </Fragment>
  );
}
