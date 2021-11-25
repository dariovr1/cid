import React, { useState, useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import { useDispatch, useSelector } from 'react-redux';
import {setStatus} from '../../Slice/SearchSlice';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectChip = () => {

    const names = [
        'done',
        'progress',
        'fail',
      ];

      const theme = useTheme();
      const dispatch = useDispatch();
      const resultset = useSelector((state) => state.resultset );
      const [personName, setPersonName] = React.useState([]);

      useEffect(() => {
        resultset.filterparam.status != "" && setPersonName(resultset.filterparam.status);
        resultset.filterparam.status.length == 0 && setPersonName([]);
      },[resultset.filterparam.status]);
    
      const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        dispatch(
        setStatus(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        ));
      };

    const  getStyles = (name, personName, theme) => {
        return {
          fontWeight:
            personName.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
        };
      };
      

    return(
        <div>
            <FormControl sx={{  width: '100%' }}>
                <InputLabel id="demo-multiple-chip-label">Status</InputLabel>
                <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} onDelete={() => {}} />
                    ))}
                    </Box>
                )}
                MenuProps={MenuProps}
                >
                {names.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </div>
    )
};


export default SelectChip;