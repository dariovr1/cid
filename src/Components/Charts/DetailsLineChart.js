import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import FilterButton from '../Buttons/FilterButton';
import Header from '../Header';
import TableComponent from '../TableComponent2';
import { useDispatch, useSelector } from 'react-redux';
import ChartComponent from './ChartComponent';
import moment from 'moment';
import  {
  todayDate,
  leakageTableData
} from '../../Data/index';

const DetailsLineChart = (props) => {
    const filterDate = useSelector((state) => state.resultset.filterparam.endDate);
    return (    
      <>
      <Header />
      <div style={{padding: '20px', gap: '20px',  display: 'flex', flexDirection : 'row'}}>
        <Typography variant="h6">Loose-end details - {todayDate(filterDate)}</Typography>
        <FilterButton hidechips={true} labelname="Leaking Parameter" datafilter={leakageTableData} chips={["Avg_Reject","AvgRjct1","MaxFlt#1","MaxRjct1","STDvR1"]} />
      </div>
      <div style={{ backgroundColor : 'white' }}>
        <ChartComponent dataLegendgraph={[
          { name: "Paker Reject Tate", symbol: { fill: "#e8d066", type: "square" } },
          { name: "Maker Reject Rate", symbol: { fill: "#a38500", type: "square" } },
          { name: "Loose-end sensitivy parameter", symbol: { fill: "red", type: "square" } },
        ]} filterDate={filterDate} morph={[
          {x: 0, y: 10.5},
          {x: 2, y: 10.5},
          {x: 4, y: 10.5},
          {x: 6, y: 10.5},
          {x: 8, y: 10.5},
          {x: 10, y: 10.5},
          {x: 12, y: 10.5},
          {x: 14, y: 10.4},
          {x: 16, y: 10.4},
          {x: 18, y: 10.4},
          {x: 20, y: 10.4},
          {x: 22, y: 10.5}
        ]} />


        <ChartComponent dataLegendgraph={[
          { name: "Loose-end cost", symbol: { fill: "black", type: "square" } },
          { name: "Loose-end sensitivy parameter", symbol: { fill: "red", type: "square" } },
        ]} filterDate={filterDate} morph={[
          {x: 0, y: 9.8},
          {x: 2, y: 9.8},
          {x: 4, y: 9.8},
          {x: 6, y: 9.8},
          {x: 8, y: 9.8},
          {x: 10, y: 9.8},
          {x: 12, y: 9.8},
          {x: 14, y: 9.8},
          {x: 16, y: 10.0},
          {x: 18, y: 10.0},
          {x: 20, y: 10.0},
          {x: 22, y: 10.2}
        ]} />

      </div>
    </>
    );
};

export default DetailsLineChart;