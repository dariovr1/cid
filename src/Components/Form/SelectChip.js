import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';


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
      const [personName, setPersonName] = React.useState([]);
    
      const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
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
                        <Chip key={value} label={value} />
                    ))}
                    </Box>
                )}
                MenuProps={MenuProps}
                >
                {names.map((name) => (
                    <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </div>
    )
};


export default SelectChip;