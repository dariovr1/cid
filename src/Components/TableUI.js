import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableComponent from './TableComponent';
import {
 excludeSelector
} from '../Selectors/Index';

const TableUI = () => {

  const rows = useSelector((state) => (excludeSelector(state.foo,'progress')));
  const dispatch = useDispatch();


  return (
    <Fragment>
        <TableComponent rows={rows} />
    </Fragment>
  );

}

export default TableUI;