import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import TableUI from '../Components/TableUI';
import SaveIcon from '@mui/icons-material/Save';

const TableContainerContainer = (props) => {

    const [toggle, setToggle] = useState(false);
    const [inputvalue, setInputValue] = useState(34);

    const handleClick = (e) => {
        console.log("handleclick test icon ", !toggle);
        setToggle(!toggle);
    };

    const handleCLickValue = (e) => {
        console.log("handleClickValue ", e);
        setInputValue(e);
    };

    return (
       <div style={{display: 'flex', padding: '20px', gap: '40px'}}>
          <div class="ContainerSidebar" style={{ width: '220px', flexDirection: 'column'}}>
            <div>
                <h2>LU44 Maker</h2>
            </div>
            <div style={{display : 'flex', 'alignItems': 'center', gap: '20px'}}>
                {(!toggle) ? <TextField  id="outlined-required" disabled label="Reject Limit" defaultValue={inputvalue} />  :  <TextField
                id="outlined-number"
                label="Number"
                onClick={handleCLickValue}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />}
                {(toggle) ? <SaveIcon onClick={handleClick} /> : <EditIcon onClick={handleClick} />}
            </div>
          </div>
          <TableUI />
       </div>
    )
};

export default TableContainerContainer;