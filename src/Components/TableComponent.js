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
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Start</TableCell>
            <TableCell align="right">Stop</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Efficiency %</TableCell>
            <TableCell align="right">Reject %</TableCell>
            <TableCell align="right">Stops</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
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
              <TableCell align="right">{row.status && objStatus[row.status]}</TableCell>
              <TableCell align="right">{convertDateTo(row.start)}</TableCell>
              <TableCell align="right">{convertDateTo(row.finish)}</TableCell>
              <TableCell align="right">{row.duration + "h"}</TableCell>
              <TableCell align="right">{row.eff}</TableCell>
              <TableCell align="right">{(row.rej) ? row.rej : "N/A"}</TableCell>
              <TableCell align="right">{row.stop}</TableCell>
              <TableCell align="right">{<a target="_blank" href={row.link}><ArrowRight /></a>}</TableCell>
              <TableCell align="right">{<DeleteButton uuid={row.id} />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
};

export default TableComponent;