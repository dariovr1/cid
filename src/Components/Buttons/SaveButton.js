import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@mui/material/Button';

const SaveButton = () => {
    return (
    <Button variant="contained" startIcon={<DoneIcon />} >
  Save
</Button>)
};

export default SaveButton;