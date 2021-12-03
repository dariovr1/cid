import * as React from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { setFilterDate, executeSearchFilter, clearFilter } from '../../Slice/SearchSlice';
import { useDispatch } from 'react-redux';
import SelectChip from '../Form/SelectChip';
import DateTimePickerComponent from '../Form/DateTimePickerComponent';
import SaveButton from "../Buttons/SaveButton";
import ClearButton from "../Buttons/ClearButton";
import FilterListIcon from '@mui/icons-material/FilterList';
import DatePickerModal from '../Modal/DatePickerModal';
import {mockData} from '../../Data/index';

  
const FilterButton = ({chips,datafilter}) => {

    const dispatch = useDispatch();

    const handleChange = (key,value) => {
            console.log("handleChange Datapicker", {
                key,
                value
            });

            dispatch(setFilterDate({key,value}));

    }


    const handleClearClick = () => {
        dispatch(clearFilter());
    }

    const handleClick = () => {
        const res = (datafilter) ? datafilter : mockData;
        console.log("handleClick");
        dispatch(executeSearchFilter(res));
    };

    return (
        <div>
            <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
                <div>
                <Button style={{background: '#004f90'}} variant="contained" {...bindToggle(popupState)} startIcon={<FilterListIcon />}>
                    Filter
                </Button>
                <Popper {...bindPopper(popupState)} transition>
                    {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <div style={{padding: '20px'}}>
                                <SelectChip items={chips} sx={{width: '100%'}} /> 
                                    <div style={{display: 'flex', gap: "50px", marginTop: '20px',  flexWrap: 'wrap' }}>
                                        <DatePickerModal label="Date From" filtername="startDate" handleChange={handleChange} />
                                        <DatePickerModal label="Date To" filtername="endDate" handleChange={handleChange} />
                                    </div>
                                <div style={{display: 'flex', marginTop: "30px", gap: '50px', justifyContent : 'flex-end'}}>
                                     <SaveButton handleClick={handleClick} />
                                     <ClearButton handleClick={handleClearClick} />
                                </div>
                            </div>
                        </Paper>
                    </Fade>
                    )}
                </Popper>
                </div>
            )}
            </PopupState>
        </div>
      );
}

export default FilterButton;
