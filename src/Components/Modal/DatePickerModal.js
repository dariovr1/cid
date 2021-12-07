import React, { useState } from "react";
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';
  import moment from 'moment';


  const DatePickerModal = (props) => {

    const [selectedDate, handleDateChange] = useState(props.value);

    const handleDatePickerHandle = (e) => {
            handleDateChange(e);
            props.handleChange(props.filtername,moment(e).format("X"));
    };

      return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker label={props.label} format="dd/MM/yyyy hh:mm a"
            clearable value={selectedDate} onChange={handleDatePickerHandle}  inputVariant="outlined" />
        </MuiPickersUtilsProvider>
      )
  };


  export default DatePickerModal;