import React from 'react';
import Button from '@mui/material/Button';
//import FailIcon from '@material-ui/icons/Warning';
import ClearIcon from '@mui/icons-material/Clear';

const FailButton = () => {
    return (
    <Button color="error" variant="contained" startIcon={<ClearIcon />}>
  Fail
</Button>)
};

export default FailButton;