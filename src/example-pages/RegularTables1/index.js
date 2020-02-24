import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import RegularTables1Example1 from '../../example-components/RegularTables1/RegularTables1Example1';
export default function RegularTables1() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Tables examples 1"
        titleDescription="Tables are the backbone of almost all web applications."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <RegularTables1Example1 />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
