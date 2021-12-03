import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowRight from '@material-ui/icons/ArrowRight';
import DeleteButton from './Buttons/DeleteButton';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import {convertDateTo}  from '../Utils/Index';
import {objStatus} from './Buttons/Index';
import TableFooter from '@mui/material/TableFooter';


const TablePaginationActions = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
};


const TableComponent2 = ({rows,tablerow}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const renderRow = (rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows);
  const handleChangePage = (event, newPage) => {
    console.log("handleChangePage pagination ", newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log("handleChangeRowsPerPage pagination ", event.target.value);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

    return (
    <TableContainer component={Paper} sx={{width: '60%', marginBottom: '50px'}}>
      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
          {tablerow.map(item => (
            <TableCell style={{width: 200}}>{item}</TableCell>
          ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {renderRow.map((row) => (
            <TableRow>
               <TableCell>{row.startDate}</TableCell>
               <TableCell>{row.endDate}</TableCell>
               <TableCell>{row.type}</TableCell>
               <TableCell>{row.rownumber}</TableCell>
               <TableCell>{row.severity}</TableCell>
               <TableCell>{row.valveno}</TableCell>
               <TableCell style={{backgroundColor: (row.alert == 1) && 'yellow' }}>{row.alert}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TableFooter style={{display: 'flex', width: '100%', flexDirection: 'row-reverse'}}>
      <TableRow>
      <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              sx={{width: '50%'}}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
         </TableFooter>
    </TableContainer>
    )
};

export default TableComponent2;