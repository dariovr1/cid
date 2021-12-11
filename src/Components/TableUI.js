import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableComponent from './TableComponent';
import {
 excludeSelector
} from '../Selectors/Index';
import LeakingData from './Buttons/LeakingData';
import FilterButton from './Buttons/FilterButton';
import { mockData, statusobj } from '../Data';
import { width } from '@mui/system';

const TableUI = () => {

  const rows = useSelector((state) => (excludeSelector(
    (state.resultset.filtered.length > 0) ? state.resultset.filtered 
    : state.resultset.default ,'progress')));
  const dispatch = useDispatch();

  const resultset = useSelector((state) =>  state.resultset);



  return (
    <Fragment>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', marginBottom: '20px', justifyContent : 'space-between'}}>
            <LeakingData />
            <FilterButton datafilter={mockData} labelname="status" chips={statusobj.index} />
          </div>
          {(resultset.filterparam.active && resultset.filtered.length == 0) && (<div style={{width : '1000px'}}>no data found</div>) || <TableComponent rows={rows} />}
        </div>
    </Fragment>
  );

}

export default TableUI;