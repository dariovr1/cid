import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryAxis, VictoryScatter, VictoryGroup, VictoryLabel, VictoryLine, VictoryLegend, VictoryTheme, VictoryZoomContainer } from "victory";
import  {
  getDatatwo,
  getDatatre, 
  getTickSet,
} from '../../Data/index';

const ChartComponent = ({dataLegendgraph,filterDate,morph}) => {

return(
    <VictoryChart width={1120} height={400} theme={VictoryTheme.material} domainPadding={10}>
    <VictoryLegend x={0} y={10} orientation="horizontal" gutter={20} data={dataLegendgraph} />
      <VictoryAxis dependentAxis tickValues={[9.8, 10.0,10.2,10.4,10.6,10.8]} />
      <VictoryAxis tickValues={getTickSet(filterDate)} tickFormat={(x) => (x <= 12) ? x + " AM" : x + " PM" } />
          <VictoryScatter data={
              [
                  {x: 2,y: 10.6,size: 6},
                  {x: 10,y: 10.6,size: 6},
                  {x: 16,y: 10.8,size: 6}
              ]
          } labels={() => ["33", "FA07643902"]}   style={{data: {fill: "red"}}} />
          <VictoryLine style={{data: {stroke: "#e8d066"}}} data={getDatatwo(filterDate)} />
          <VictoryScatter style={{data: { fill : "#a38500" }}} size={3} data={getDatatwo(filterDate)} />
          <VictoryLine style={{data: {stroke: "#a38501"}}} data={getDatatre(filterDate,morph)} />
          <VictoryScatter style={{data: { fill : "#a38501" }}} size={3} data={getDatatre(filterDate,morph)} />
      </VictoryChart>)

    };

export default ChartComponent;