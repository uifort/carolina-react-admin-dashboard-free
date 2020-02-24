import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-components';

import BadgesBasic from '../../example-components/Badges/BadgesBasic';
import BadgesPills from '../../example-components/Badges/BadgesPills';
import BadgesButtons from '../../example-components/Badges/BadgesButtons';
export default function Badges() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Badges"
        titleDescription="Badges and labels are used to offer extra small pieces of info for your content."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Basic">
            <BadgesBasic />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Pills">
            <BadgesPills />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Buttons with label badges">
            <BadgesButtons />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>
    </Fragment>
  );
}
