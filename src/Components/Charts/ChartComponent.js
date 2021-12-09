import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryAxis, VictoryScatter, VictoryGroup, VictoryLabel, VictoryLine, VictoryLegend, VictoryTheme, VictoryZoomContainer } from "victory";
import  {
  getDatatwo,
  getDatatre, 
  getTickSet,
} from '../../Data/index';

const ChartComponent = ({dataLegendgraph,filterDate,morph,designgraph}) => {

    console.log("design graph ", designgraph);

return(
    <VictoryChart width={1120} height={400} theme={VictoryTheme.material} domainPadding={10}>
    <VictoryLegend x={0} y={10} orientation="horizontal" gutter={20} data={dataLegendgraph} />
      <VictoryAxis  dependentAxis tickValues={[9.8, 10.0,10.2,10.4,10.6,10.8]} />
      <VictoryAxis tickValues={getTickSet(filterDate)} tickFormat={(x) => (x <= 12) ? x + " AM" : x + " PM" } />
      {designgraph.map(item => (
        [item.scatter,item.line]
        ))}
    
      </VictoryChart>)

    };

export default ChartComponent;