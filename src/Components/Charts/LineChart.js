import React from 'react';
import { VictoryChart, VictoryAxis, VictoryScatter, VictoryGroup, VictoryLabel, VictoryLine, VictoryLegend, VictoryTheme, VictoryZoomContainer } from "victory";

const LineChart = (props) => {
  const basicData = [{x: 0, y: 2}, {x: 1, y: 2.5}, {x: 2, y: 4}, {x: 3, y: 5}, {x: 4, y: 3}, {x: 5, y: 1}, {x: 6, y: 3}];
    return (
      <VictoryChart
      width={1120}
      height={400}
      theme={VictoryTheme.material}
      domainPadding={20}>
      <VictoryAxis scale={{ x: "date" }} />
      <VictoryAxis dependentAxis />
    <VictoryLine
    data={basicData}
    interpolation="monotoneX"
    scale={{ x: "time", y: "linear" }}
    standalone={false}
    style={{
      data: { stroke: 'red' },
      parent: { border: '1px solid #d32f2f' },
    }} />
      <VictoryScatter style={{data: {fill: '#d32f2f'}}} size={3}  data={basicData} />
    </VictoryChart>
    );
};

export default LineChart;