import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import IconsMaterial from '../../example-components/Icons/IconsMaterial';
import IconsFontawesome from '../../example-components/Icons/IconsFontawesome';
import IconsPe7 from '../../example-components/Icons/IconsPe7';
export default function Icons() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Icons"
        titleDescription="Wide icons selection including from flag icons to FontAwesome and other icons libraries."
      />

      <div className="bg-royal mb-5 rounded">
        <div className="pt-5 pb-4">
          <h4 className="heading-2 heading-2-demo pb-1 text-white">Material</h4>
          <p className="mb-3 px-4">
            1,000+ React Material icons ready to use from the official website.
          </p>
          <div className="px-5">
            <IconsMaterial />
          </div>
        </div>
      </div>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <div className="bg-premium-dark mb-5 rounded">
            <div className="pt-5 pb-4">
              <h4 className="heading-2 heading-2-demo pb-1 text-white">
                FontAwesome
              </h4>
              <p className="mb-3 px-4">
                Over 1500 pixel perfect icons available, each designed from
                scratch, forged from years of experience.
              </p>
              <div className="px-5">
                <IconsFontawesome />
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} lg={6}>
          <div className="bg-vicious-stance mb-5 rounded">
            <div className="pt-5 pb-4">
              <h4 className="heading-2 heading-2-demo pb-1 text-white">Pe7</h4>
              <p className="mb-3 px-4">
                Over 200 IOS inspired vector icons that can bea easily
                customized and adapted to multiple elements.
              </p>
              <div className="px-5">
                <IconsPe7 />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
