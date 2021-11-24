import React from 'react';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import Button from '@mui/material/Button';

const StopButton = () => {
    return (
    <Button color="error" variant="contained" startIcon={<DoDisturbIcon />} >
  Stop
</Button>)
};

export default StopButton;