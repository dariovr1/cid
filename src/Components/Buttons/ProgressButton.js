import React from 'react';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';

const ProgressButton = () => {
    return (
    <Button color="warning" variant="contained" startIcon={<RefreshIcon />}>
  Progress
</Button>)
};

export default ProgressButton;