import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableComponent from './TableComponent';
import LineChart from './Charts/LineChart';

const TableUI = () => {

  const rows = useSelector((state) => state.foo);
  const dispatch = useDispatch();


  return (
    <Fragment>
        <TableComponent rows={rows} />
        <LineChart />
    </Fragment>
  );

}

export default TableUI;