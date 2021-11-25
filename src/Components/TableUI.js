import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableComponent from './TableComponent';
import {
 excludeSelector
} from '../Selectors/Index';
import LeakingData from './Buttons/LeakingData';
import FilterButton from './Buttons/FilterButton';

const TableUI = () => {

  const rows = useSelector((state) => (excludeSelector(
    (state.resultset.filtered.length > 0) ? state.resultset.filtered 
    : state.resultset.default ,'progress')));
  const dispatch = useDispatch();


  return (
    <Fragment>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', marginBottom: '20px'}}>
            <LeakingData />
            <FilterButton />
          </div>
          <TableComponent rows={rows} />
        </div>
    </Fragment>
  );

}

export default TableUI;