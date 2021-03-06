import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryAxis, VictoryScatter, VictoryGroup, VictoryLabel, VictoryLine, VictoryLegend, VictoryTheme, VictoryZoomContainer } from "victory";
import  {
  getDatatwo,
  getDatatre, 
  getTickSet,
} from '../../Data/index';
const ChartComponent = ({dataLegendgraph,filterDate,morph,designgraph}) => {
    console.log("design graph ", designgraph);
    const data = [
      [ {x: 0, y: 10.2},
        {x: 2, y: 10.2},
        {x: 4, y: 10.2},
        {x: 6, y: 10.2},
        {x: 8, y: 10.2},
        {x: 10, y: 10.6},
        {x: 12, y: 10.6},
        {x: 14, y: 10.6},
        {x: 16, y: 10.7},
        {x: 18, y: 10.7},
        {x: 20, y: 10.7},
        {x: 22, y: 10.8}],
      [{ x: 1, y: 75 }, { x: 2, y: 85 }, { x: 3, y: 95 }, { x: 4, y: 100 }]
    ];
    const maxima = data.map(
      (dataset) => Math.max(...dataset.map((d) => d.y))
    );
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
