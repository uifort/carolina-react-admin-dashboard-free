import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import PopoversBasic from '../../example-components/Popovers/PopoversBasic';
export default function Popovers() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Popovers"
        titleDescription="Add small overlay content, like those found in iOS, to any element for housing secondary information."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <PopoversBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
