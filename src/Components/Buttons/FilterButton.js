import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { setFilterDate, executeSearchFilter, setStatus, clearFilter } from '../../Slice/SearchSlice';
import { useDispatch, useSelector } from 'react-redux';
import SelectChip from '../Form/SelectChip';
import DateTimePickerComponent from '../Form/DateTimePickerComponent';
import SaveButton from "../Buttons/SaveButton";
import ClearButton from "../Buttons/ClearButton";
import FilterListIcon from '@mui/icons-material/FilterList';
import DatePickerModal from '../Modal/DatePickerModal';
import {mockData} from '../../Data/index';

  
const FilterButton = ({chips,datafilter,labelname,hidechips}) => {

    const dispatch = useDispatch();
    const inputRef = React.useRef(null);
    const [addDate,setAddDate] = useState([]);
    const [currchips, setCurrChips] = useState([]);

        const handleChangeChip = (datachip) => {
            setCurrChips(datachip.target.value.map(item => item));
        };

        const onDeleteChips = (value) => {
                console.log("onDeleteChips ", value);
                setCurrChips(currchips.filter(item => item != value));
        }


    const handleChange = (key,value) => {
            console.log("handleChange Datapicker", {
                key,
                value
            });

        setAddDate(elem => [...elem,{key,value}]);
    }

    const filterParam = useSelector((state) => state.resultset.filterparam);

    const getClockValue = (key) => addDate.find(item => item.key == key);
    
    const handleStatus = (val) => {
        console.log("handle status ", val);
    }

    const handleRemoveStatus = (val) => {
        console.log("handle remove status ", val);
    }

    const handleClearClick = () => {
        dispatch(clearFilter());
        inputRef.current.click();
    }

    const handleClick = () => {
        console.log("addDate ", addDate);
        setAddDate([]);
        setCurrChips([]);
        dispatch(setStatus(currchips));
        dispatch(setFilterDate(addDate));
        dispatch(executeSearchFilter(datafilter));
        inputRef.current.click();
    };

    return (
        <div>
            <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
                <div>
                <Button ref={inputRef} style={{background: '#004f90'}} variant="contained" {...bindToggle(popupState)} startIcon={<FilterListIcon />}>
                    Filter
                </Button>
                <Popper {...bindPopper(popupState)}  transition>
                    {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <div style={{padding: '20px'}}>
                            {(!hidechips) && <SelectChip currchips={currchips} handleChangeChip={handleChangeChip} onDeleteChips={onDeleteChips} labelname={labelname} items={chips} sx={{width: '100%'}} /> }
                                    <div style={{display: 'flex', gap: "50px", marginTop: '20px',  flexWrap: 'wrap' }}>
                                        <DatePickerModal label="Date From" filtername="startDate" value={getClockValue("startDate") && getClockValue("startDate") || null } handleChange={handleChange} />
                                        <DatePickerModal label="Date To" filtername="endDate" value={getClockValue("endDate") && getClockValue("endDate") || null} handleChange={handleChange} />
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
