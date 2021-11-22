import React from 'react';
import Button from '@mui/material/Button';
import DoneIcon from '@material-ui/icons/Done';

const DoneButton = () => {
    return (
    <Button color="success" variant="contained" startIcon={<DoneIcon />}>
  Done
</Button>)
};

export default DoneButton;