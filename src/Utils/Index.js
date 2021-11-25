import moment from 'moment';

const convertDateTo = (timestamp,form = 'MMM DD, Y h:mm:ss A' ) => {
    return moment(timestamp).format(form);
};


export {
    convertDateTo
};