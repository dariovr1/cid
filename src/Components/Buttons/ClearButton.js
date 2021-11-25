import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@mui/material/Button';

const ClearButton = (props) => {
    return (
    <Button variant="outlined"  startIcon={<ClearIcon />} onClick={() => props.handleClick()} >
  Clear
</Button>)
};

export default ClearButton;