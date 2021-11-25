import React from 'react';
import Button from '@mui/material/Button';
//import FailIcon from '@material-ui/icons/Warning';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const LeakingData = () => {
    return (
    <Button style={{background: '#004f90', color: 'white', marginRight: 'auto'}} startIcon={<ShowChartIcon />}>
    SHOW LEADKAGE <br/> DATA
    </Button>)
};

export default LeakingData;