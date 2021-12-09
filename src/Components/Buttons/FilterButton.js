import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { setFilterDate, executeSearchFilter, clearFilter } from '../../Slice/SearchSlice';
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
    console.log("current data leaking data ", datafilter);

    const handleChange = (key,value) => {
            console.log("handleChange Datapicker", {
                key,
                value
            });

        setAddDate(elem => {
            return [
                ...elem,
                {
                    key,
                    value
                }
            ];
        });
        /*
        dispatch(setFilterDate({key,value}));
        */
    }

    const filterParam = useSelector((state) => state.resultset.filterparam);


    const handleClearClick = () => {
        dispatch(clearFilter());
        inputRef.current.click();
    }

    const handleClick = () => {
        console.log("addDate ", addDate);
        const res = (datafilter) ? datafilter : mockData;
        console.log("res is ", res);
        dispatch(setFilterDate(addDate));
        dispatch(executeSearchFilter(res));
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
                            {(!hidechips) && <SelectChip labelname={labelname} items={chips} sx={{width: '100%'}} /> }
                                    <div style={{display: 'flex', gap: "50px", marginTop: '20px',  flexWrap: 'wrap' }}>
                                        <DatePickerModal label="Date From" filtername="startDate" value={filterParam.startDate} handleChange={handleChange} />
                                        <DatePickerModal label="Date To" filtername="endDate" value={filterParam.endDate} handleChange={handleChange} />
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
