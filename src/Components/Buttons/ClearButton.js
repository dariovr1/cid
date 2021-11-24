import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@mui/material/Button';

const ClearButton = () => {
    return (
    <Button variant="outlined"  startIcon={<ClearIcon />} >
  Clear
</Button>)
};

export default ClearButton;