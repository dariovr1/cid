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
import {setStatus, removeStatus} from '../../Slice/SearchSlice';



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

const SelectChip = ({currchips,items,labelname,handleChangeChip,onDeleteChips}) => {


  const theme = useTheme();
  const dispatch = useDispatch();
  const resultset = useSelector((state) => state.resultset );

    return(
        <div>
            <FormControl sx={{  width: '100%' }}>
                <InputLabel id="demo-multiple-chip-label">{labelname}</InputLabel>
                <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={currchips}
                onChange={handleChangeChip}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                        <Chip key={value}  clickable
                        deleteIcon={
                          <CancelRoundedIcon
                            onMouseDown={(event) => event.stopPropagation()}
                          />
                        } label={value} onDelete={() => onDeleteChips(value)} />
                    ))}
                    </Box>
                )}
                MenuProps={MenuProps}
                >
                {items.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={currchips.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </div>
    )
};


export default SelectChip;