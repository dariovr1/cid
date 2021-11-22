import * as React from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { searchByWord } from '../../Slice/SearchSlice';
import { useDispatch } from 'react-redux';

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
                                <TextField helperText=" " id="demo-helper-text-aligned-no-helper" label="Name" onChange={handleSearchName} />
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
