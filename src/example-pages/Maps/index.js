import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import MapsGoogleMaps from '../../example-components/Maps/MapsGoogleMaps';
import MapsLeafletMaps from '../../example-components/Maps/MapsLeafletMaps';
export default function Maps() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Maps"
        titleDescription="Implement in your applications Google or vector maps."
      />
      <ExampleWrapperSimple sectionHeading="Google maps">
        <MapsGoogleMaps />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Leaflet maps">
        <MapsLeafletMaps />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
