import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

import RegularTables4Example7 from '../../example-components/RegularTables4/RegularTables4Example7';
export default function RegularTables4() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Tables examples 4"
        titleDescription="Tables are the backbone of almost all web applications."
      />

      <ExampleWrapperSeamless sectionHeading="">
        <RegularTables4Example7 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
