import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-components';

import ProgressBarsBasic from '../../example-components/ProgressBars/ProgressBarsBasic';
import ProgressBarsCircular from '../../example-components/ProgressBars/ProgressBarsCircular';
import ProgressBarsMultiple from '../../example-components/ProgressBars/ProgressBarsMultiple';
export default function ProgressBars() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Progress Bars"
        titleDescription="You can use the progress bars on their own or in combination with other widgets."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Basic">
            <ProgressBarsBasic />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Multiple">
            <ProgressBarsMultiple />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Circular">
            <ProgressBarsCircular />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>
    </Fragment>
  );
}
