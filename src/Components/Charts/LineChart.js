import React from 'react';
import { VictoryChart, VictoryAxis, VictoryScatter, VictoryGroup, VictoryLabel, VictoryLine, VictoryLegend, VictoryTheme, VictoryZoomContainer } from "victory";
import moment from 'moment';
import  { basicData,
  basicDatatwo,
  basicDatatre,
  basicDataquattro} from '../../Data/index';

const LineChart = (props) => {
    return (
      <VictoryChart width={1120} height={400} theme={VictoryTheme.material} domainPadding={10}>
        <VictoryAxis dependentAxis tickValues={[9.8, 10.0,10.2,10.4,10.6,10.8]} />
        <VictoryAxis
              tickValues={
                [1638230400000,
                1638237600000,
                1638244800000,
                1638252000000,
                1638259200000,
                1638266400000,
                1638273600000,
                1638280800000,
                1638288000000,
                1638295200000,
                1638302400000,
                1638309600000]}
              tickFormat={(x) =>  moment(x).format("hh:mm A")}
            />
              <VictoryLine
              style={{
                data: {stroke: "black"}
              }}
              data={basicData}
            />
            <VictoryLine style={{data: { stroke: "pink" }}} data={basicDatatwo} />
            <VictoryLine style={{data: { stroke: "black" }}} data={basicDatatre} />
            <VictoryLine style={{data: { stroke: "violet" }}} data={basicDataquattro} />
      <VictoryScatter style={{data: {fill: '#191a19'}}} size={3}  data={basicData} />
      <VictoryScatter style={{data: {fill: 'black'}}} size={3}  data={basicDatatre} />
      <VictoryScatter style={{data: {fill: '#fd30f6'}}} size={3}  data={basicDataquattro} />
      <VictoryScatter style={{data: { fill : "pink" }}} size={3} data={basicDatatwo} />

    </VictoryChart>
    );
};

export default LineChart;