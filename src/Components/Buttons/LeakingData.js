import React from 'react';
import Button from '@mui/material/Button';
//import FailIcon from '@material-ui/icons/Warning';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Link } from "react-router-dom";


const LeakingData = () => {
    return (
        <Link to="/leaking">
    <Button style={{background: '#004f90', color: 'white', marginRight: 'auto'}} startIcon={<ShowChartIcon />}>
    SHOW LEAKAGE <br/> DATA
    </Button>
    </Link>
    )
};

export default LeakingData;