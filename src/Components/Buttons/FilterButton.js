import * as React from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { searchByWord } from '../../Slice/SearchSlice';
import { useDispatch } from 'react-redux';
import SelectChip from '../Form/SelectChip';
import DateTimePickerComponent from '../Form/DateTimePickerComponent';
import SaveButton from "../Buttons/SaveButton";
import ClearButton from "../Buttons/ClearButton";


const FilterButton = () => {

    const dispatch = useDispatch();

    const handleSearchName = (e) => {
       (e.target.value.length > 3) && dispatch(searchByWord(e.target.value));
    }

    return (
        <div style={{ display: 'flex', justifyContent : 'flex-end', padding: '20px' }}>
            <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
                <div>
                <Button variant="contained" {...bindToggle(popupState)}>
                    Filter
                </Button>
                <Popper {...bindPopper(popupState)} transition>
                    {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <div style={{padding: '20px'}}>
                                <SelectChip sx={{width: '100%'}} />
                                <div style={{display: 'flex'}}>
                                    <div style={{display: 'flex', gap: "50px", marginTop: '20px',  flexWrap: 'wrap' }}>
                                        <DateTimePickerComponent name="Date From" label="Date From" />
                                        <DateTimePickerComponent name="Date To" label="Date To" />
                                    </div>
                                </div>
                                <div style={{display: 'flex', marginTop: "30px", gap: '50px', justifyContent : 'flex-end'}}>
                                     <SaveButton />
                                     <ClearButton />
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
