import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowRight from '@material-ui/icons/ArrowRight';
import DeleteButton from './Buttons/DeleteButton';
import {
  convertDateTo
}  from '../Utils/Index';

import {
  objStatus
} from './Buttons/Index';

const TableComponent = ({rows}) => {
    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Status</TableCell>
            <TableCell >Start</TableCell>
            <TableCell >Stop</TableCell>
            <TableCell >Duration</TableCell>
            <TableCell >Efficiency %</TableCell>
            <TableCell >Reject %</TableCell>
            <TableCell >Stops</TableCell>
            <TableCell ></TableCell>
            <TableCell ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.status && objStatus[row.status]}</TableCell>
              <TableCell >{convertDateTo(row.start)}</TableCell>
              <TableCell >{convertDateTo(row.finish)}</TableCell>
              <TableCell >{row.duration + "h"}</TableCell>
              <TableCell >{row.eff}</TableCell>
              <TableCell >{(row.rej) ? row.rej : "N/A"}</TableCell>
              <TableCell >{row.stop}</TableCell>
              <TableCell >{<DeleteButton uuid={row.id} />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
};

export default TableComponent;