import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import TableUI from '../Components/TableUI';

const TableContainerContainer = (props) => {
    return (
       <div style={{display: 'flex', padding: '20px', gap: '40px'}}>
          <div class="ContainerSidebar" style={{ width: '180px', flexDirection: 'column'}}>
            <div>
                <h2>LU44 Maker</h2>
            </div>
            <div style={{display : 'flex', 'alignItems': 'center', gap: '20px'}}>
                <TextField id="outlined-required" label="Reject Limit" defaultValue="34" />
                <EditIcon />
            </div>
          </div>
          <TableUI />
       </div>
    )
};

export default TableContainerContainer;