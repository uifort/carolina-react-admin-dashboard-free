import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import NavigationMenusVerticalBasic from '../../example-components/NavigationMenus/NavigationMenusVerticalBasic';
export default function NavigationMenus() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Navigation menus"
        titleDescription="Navigation menus are one of the basic building blocks for any web or mobile app."
      />

      <ExampleWrapperSimple sectionHeading="Vertical menus">
        <NavigationMenusVerticalBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
