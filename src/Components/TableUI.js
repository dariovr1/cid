import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableComponent from './TableComponent';
import {
 excludeSelector
} from '../Selectors/Index';

const TableUI = () => {

  const rows = useSelector((state) => (excludeSelector(
    (state.resultset.filtered.length > 0) ? state.resultset.filtered 
    : state.resultset.default ,'progress')));
  const dispatch = useDispatch();


  return (
    <Fragment>
        <TableComponent rows={rows} />
    </Fragment>
  );

}

export default TableUI;