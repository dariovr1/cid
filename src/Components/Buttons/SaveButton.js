import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@mui/material/Button';

const SaveButton = (props) => {
    return (
    <Button variant="contained" startIcon={<DoneIcon />} onClick={() => props.handleClick()}>
  Save
</Button>)
};

export default SaveButton;