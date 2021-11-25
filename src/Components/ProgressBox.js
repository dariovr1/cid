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

    const rows = useSelector((state) => (includeSelector(state.resultset.default,'progress')));
    console.log("rows progress is ", rows);

    return(
        <Card sx={{ width: '100%' }}>
        <div style={{ width: '100%', height: '10px', backgroundColor: '#fed702' }}>
        </div>
        <CardContent>
            {rows.map((item) => (
                <Box sx={{ display: 'flex', gap : '100px' }}>
                    <Box sx={{ display: 'flex' , flexDirection: "column" }}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="h8" fontSize="15px" marginBottom="5px">{item.fakeDate}</Typography>
                        <ProgressButton />
                    </Box>
                    <div style={{display : 'flex', flexDirection : 'column'}}>
                        <span style={{marginTop : '10px'}}>Duration</span>
                        <span style={{marginTop : '10px'}}>41m</span>
                    </div>
                    <div style={{display : 'flex',  flexDirection : 'column'}}>
                    <span style={{marginTop : '10px'}}>Current Step</span>
                    <span style={{marginTop : '10px'}}>Data Acquisition</span>
                </div>
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