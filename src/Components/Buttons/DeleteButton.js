import React from 'react';
import Button from '@mui/material/Button';
import Delete from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';
import {deleteItem} from '../../Slice/SearchSlice';


const DeleteButton = (props) => {

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log('handleDelete ',id);
        dispatch(deleteItem(id));
    }

    return (<Delete onClick={() => handleDelete(props.uuid)} />)
};

export default DeleteButton;