import moment from 'moment';

const convertDateTo = (timestamp,form = 'MMM DD, Y h:mm:ss A' ) => {
    console.log(moment.unix(timestamp));
    return moment(timestamp).format(form);
};


export {
    convertDateTo
};