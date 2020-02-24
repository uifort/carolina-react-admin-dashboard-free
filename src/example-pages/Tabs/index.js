import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import TabsBasic from '../../example-components/Tabs/TabsBasic';
export default function TabsExamples() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Tabs"
        titleDescription="Tabs are used to split content between multiple sections. Wide variety available."
      />

      <ExampleWrapperSimple sectionHeading="Basic tabs">
        <TabsBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
