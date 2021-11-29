import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import TableUI from '../Components/TableUI';
import SaveIcon from '@mui/icons-material/Save';

const TableContainerContainer = (props) => {

    const [togglemin, setMinToggle] = useState(false);
    const [togglemax, setMaxToggle] = useState(false);
    const [inputMinvalue, setInputMinValue] = useState(28);
    const [inputMaxvalue, setInputMaxValue] = useState(34);


    const handleMinClick = (e) => {
        console.log("handleclick min test icon ", !togglemin);
        setMinToggle(!togglemin);
    };

    const handleCLickMinValue = (e) => {
        console.log("handleClickValue min", e);
        setInputMinValue(e);
    };

    const handleMaxClick = (e) => {
        console.log("handleclick test icon ", !togglemax);
        setMaxToggle(!togglemax);
    };

    const handleCLickMaxValue = (e) => {
        console.log("handleClickValue ", e);
        setInputMaxValue(e);
    };

    return (
       <div style={{display: 'flex', padding: '20px', gap: '40px'}}>
          <div class="ContainerSidebar" style={{ width: '220px', flexDirection: 'column'}}>
            <div>
                <h2>LU44 Maker</h2>
            </div>
                <div style={{display : 'flex', 'alignItems': 'center', flexDirection : 'column', gap: '20px'}}>
                    <div class="rejCont" style={{display: 'flex', 'alignItems': 'center', gap: '10px'}}>
                    {(!togglemin) ? <TextField  id="outlined-required" disabled label="Reject Min Limit" defaultValue={inputMinvalue} />  :  <TextField
                    id="outlined-number"
                    label="Number"
                    onClick={handleCLickMinValue}
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />}
                    {(togglemin) ? <SaveIcon onClick={handleMinClick} /> : <EditIcon onClick={handleMinClick} />}
                    </div>
               
                    <div class="rejCont" style={{display: 'flex', 'alignItems': 'center', gap: '10px'}}>
                {(!togglemax) ? <TextField  id="outlined-required" disabled label="Reject Max Limit" defaultValue={inputMaxvalue} />  :  <TextField
                id="outlined-number"
                label="Number"
                onClick={handleCLickMaxValue}
                type="number"
                InputLabelProps={{
                shrink: true,
                }}
            />}
                {(togglemax) ? <SaveIcon onClick={handleMaxClick} /> : <EditIcon onClick={handleMaxClick} />}
                    </div>
                </div>
                <br/>
         <h8 style={{color: '#004f90'}}>SHOW DETAILS</h8>
                </div>
          <TableUI />
       </div>
    )
};

export default TableContainerContainer;