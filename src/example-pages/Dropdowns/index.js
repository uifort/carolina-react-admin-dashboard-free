import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-components';

import DropdownsBasic from '../../example-components/Dropdowns/DropdownsBasic';
import DropdownsSplit from '../../example-components/Dropdowns/DropdownsSplit';
export default function Dropdowns() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Dropdowns"
        titleDescription="A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Basic">
            <DropdownsBasic />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Split">
            <DropdownsSplit />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>
    </Fragment>
  );
}
