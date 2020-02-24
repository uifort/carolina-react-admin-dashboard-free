import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-components';

import ApexChartsLine from '../../example-components/ApexCharts/ApexChartsLine';
import ApexChartsArea from '../../example-components/ApexCharts/ApexChartsArea';
import ApexChartsColumn from '../../example-components/ApexCharts/ApexChartsColumn';
import ApexChartsBar from '../../example-components/ApexCharts/ApexChartsBar';
import ApexChartsMixed from '../../example-components/ApexCharts/ApexChartsMixed';
import ApexChartsHeatmap from '../../example-components/ApexCharts/ApexChartsHeatmap';
import ApexChartsRadialbar from '../../example-components/ApexCharts/ApexChartsRadialbar';
import ApexChartsRadar from '../../example-components/ApexCharts/ApexChartsRadar';
export default function ApexCharts() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Apex Charts"
        titleDescription="Wonderful animated charts built with ApexCharts components."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ExampleWrapperSimple sectionHeading="Area">
            <ApexChartsArea />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Column">
            <ApexChartsColumn />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Line">
            <ApexChartsLine />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Radar">
            <ApexChartsRadar />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} md={6}>
          <ExampleWrapperSimple sectionHeading="Bar">
            <ApexChartsBar />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Heatmap">
            <ApexChartsHeatmap />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Mixed">
            <ApexChartsMixed />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Radial bar">
            <ApexChartsRadialbar />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>
    </Fragment>
  );
}
