import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableComponent from './TableComponent';

const TableUI = () => {

  const rows = useSelector((state) => state.foo);
  const dispatch = useDispatch();


  return (
    <Fragment>
        <TableComponent rows={rows} />
    </Fragment>
  );

}

export default TableUI;