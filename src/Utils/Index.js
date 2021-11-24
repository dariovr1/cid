import moment from 'moment';

const convertDateTo = (timestamp,form = 'MMM DD h:mm A' ) => {
    return moment(timestamp).format(form);
};


export {
    convertDateTo
};