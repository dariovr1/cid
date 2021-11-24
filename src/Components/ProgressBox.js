import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import {
    includeSelector
   } from '../Selectors/Index';
import ProgressButton from './Buttons/ProgressButton';
import StopButton from './Buttons/StopButton';
import Typography from '@mui/material/Typography';
import {
    convertDateTo
  }  from '../Utils/Index';


const ProgressBox = (props) => {

    const rows = useSelector((state) => (includeSelector(state.foo,'progress')));
    console.log("rows progress is ", rows);

    return(
        <Card sx={{ width: '100%' }}>
        <CardContent>
            {rows.map((item) => (
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex' , flexDirection: "column", marginRight : 'auto' }}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="h8" fontSize="14px" marginBottom="10px">{convertDateTo(item.start)}</Typography>
                        <ProgressButton />
                    </Box>
                </Box>
            ))}
        </CardContent>
      </Card>
    )
};

const style = {
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
};

export default ProgressBox;