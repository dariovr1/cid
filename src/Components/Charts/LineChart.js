import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryAxis, VictoryScatter, VictoryGroup, VictoryLabel, VictoryLine, VictoryLegend, VictoryTheme, VictoryZoomContainer } from "victory";
import  { getBasicData,
  getDatatwo,
  getDatatre, 
  getDataquattro, 
  getTickSet,
  todayDate,
  leakageTableData
} from '../../Data/index';
import FilterButton from '../Buttons/FilterButton';
import Header from '../Header';
import TableComponent from '../TableComponent2';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';



const LineChart = (props) => {

    const dataLegendgraph = [
      { name: "Avg_Reject", symbol: { fill: "#e8d066", type: "square" } },
      { name: "AvgRjct1", symbol: { fill: "#a38500", type: "square" } },
      { name: "MaxFlt#1", symbol: { fill: "#000", type: "square" } },
      { name: "MaxRjct1", symbol: { fill: "#8a3395", type: "square" } },
      { name: "STDvR1", symbol: { fill: "#ec8fca", type: "square" } }
    ];

    const [todayDateResult,setTodayDate] = useState(todayDate);

    const statusList = useSelector((state) => {
      if (state.resultset.filterparam.status.length > 0 ) {
        return state.resultset.filterparam.status;
      }
      return ["Avg_Reject","AvgRjct1","MaxFlt#1","MaxRjct1","STDvR1"];
    });

    const leakageData = useSelector((state) => (state.resultset.filtered.length > 0) ? state.resultset.filtered : leakageTableData);
    const filterDate = useSelector((state) => state.resultset.filterparam.endDate);


    return (    
      <>
      <Header /> 
      <div style={{backgroundColor : '#f8f5f5'}}>
        <Typography variant="h5" style={{padding: '20px'}}>LU44 Maker</Typography>
      </div>
      <div style={{padding: '20px', gap: '20px',  display: 'flex', flexDirection : 'row'}}>
        <Typography variant="h6">Leakage Date - {todayDate(filterDate)}</Typography>
        <FilterButton labelname="Leakage Parameters" datafilter={leakageTableData} chips={["Avg_Reject","AvgRjct1","MaxFlt#1","MaxRjct1","STDvR1"]} />
      </div>
      <div style={{ backgroundColor : '#f8f8f8', padding: '20px' }}>
        <TableComponent  rows={leakageData} tablerow={['startDate','endDate','type', 'rownumber', 'severity', 'valveno', 'alert' ]} />
          <VictoryChart width={1120} height={400} theme={VictoryTheme.material} domainPadding={10}>
          <VictoryLegend x={0} y={10}
          orientation="horizontal"
          gutter={20}
          data={dataLegendgraph.filter(item => statusList.includes(item.name))}
        />
            <VictoryAxis dependentAxis tickValues={[9.8, 10.0,10.2,10.4,10.6,10.8]} />
            <VictoryAxis
                  tickValues={getTickSet(filterDate)}
                  tickFormat={(x) => (x <= 12) ? x + " AM" : x + " PM" }
                />
                {statusList.includes("Avg_Reject") && <VictoryLine style={{data: {stroke: "#e8d066"}}} data={getBasicData(filterDate)} />}
                {statusList.includes("AvgRjct1") && <VictoryLine style={{data: { stroke: "#a38500" }}} data={getDatatwo(filterDate)} />}
                {statusList.includes("MaxFlt#1") && <VictoryLine style={{data: { stroke: "black" }}} data={getDatatre(filterDate)} />}
                {statusList.includes("STDvR1") && <VictoryLine style={{data: { stroke: "violet" }}} data={getDataquattro(filterDate)} />}

                {statusList.includes("Avg_Reject") && <VictoryScatter style={{data: {fill: '#e8d066'}}} size={3}  data={getBasicData(filterDate)} />}
                {statusList.includes("MaxFlt#1") && <VictoryScatter style={{data: {fill: 'black'}}} size={3}  data={getDatatre(filterDate)} />}
                {statusList.includes("STDvR1") && <VictoryScatter style={{data: {fill: '#fd30f6'}}} size={3}  data={getDataquattro(filterDate)} />}
                {statusList.includes("AvgRjct1") && <VictoryScatter style={{data: { fill : "#a38500" }}} size={3} data={getDatatwo(filterDate)} />}
        </VictoryChart>
      </div>
    </>
    );
};

export default LineChart;