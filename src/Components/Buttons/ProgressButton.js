import React from 'react';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';

const ProgressButton = () => {
    return (
    <Button style={{background: '#fed600' , padding: '10px', color: '#1c1700', width: '150px'}} variant="contained" startIcon={<RefreshIcon />}>
  In Progress
</Button>)
};

export default ProgressButton;