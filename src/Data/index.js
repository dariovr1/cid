import moment from 'moment';
const currentdate = parseInt(moment().format("HH"));

const todayDate = (data) => {
  return (data) ? moment(moment.unix(data)).format("MMM D, YYYY").toString() : moment().format("MMM D, YYYY").toString();
};

const leakageTableData = [{
  startDate : '17/11/2021 00:00:00',
  endDate : '17/11/2021 18:00:00',
  epstart : 16371072000,
  epfinish : 1637172000,
  type : 2,
  rownumber: 4,
  severity : 2,
  valveno :8,
  alert : 1,
 },
 {
  startDate : '10/11/2021 00:00:00',
  endDate : '10/11/2021 19:00:00',
  epstart : 16365024000,
  epfinish : 1636570800,
  type : 2,
  rownumber: 1,
  severity : 2,
  valveno :21,
  alert : 1,
 },
 {
  startDate : '30/10/2021 00:00:00',
  endDate : '30/10/2021 23:00:00',
  epstart : 16382304000,
  epfinish : 1636570800,
  type : 5,
  rownumber: 16,
  severity : 30.1,
  valveno :1.645,
  alert : '',
 },
 {
  startDate : '20/10/2021 00:00:00',
  endDate : '20/10/2021 22:00:00',
  epstart : 16346880000,
  epfinish : 1634767200,
  type : 5,
  rownumber: 16,
  severity : 30.1,
  valveno :1.645,
  alert : '',
 },
 {
  startDate : '10/10/2021 00:00:00',
  endDate : '10/10/2021 18:00:00',
  epstart : 1633824000,
  epfinish : 1633888800,
  type : 5,
  rownumber: 16,
  severity : 30.1,
  valveno :1.634,
  alert : 1,
 },
 {
  startDate : '01/09/2021 00:00:00',
  endDate : '01/09/2021 15:00:00',
  epstart : 1630454400,
  epfinish : 1630508400,
  type : 5,
  rownumber: 16,
  severity : 30.1,
  valveno :1.634,
  alert : 1,
 },
 {
  startDate : '01/07/2021 00:00:00',
  endDate : '01/07/2021 19:00:00',
  epstart : 1625097600,
  epfinish : 1625166000,
  type : 5,
  rownumber: 16,
  severity : 30.1,
  valveno :1.638,
  alert : '',
 }];


const mockData = [
    {
      id : 4791,
      name: 'Loose-end algorithm execution', 
      status: 'progress',
      start : 1630476000000,
      finish : 1630656000000,
      fakeDate : 'Nov 23, 2021 - 11:04:00 PM',
      duration : 8,
      eff: 67.81,
      rej : 10.03,
      stop : "0.10",
      link : "http://www.google.com"
    },
    {
      id : 994,
      status: 'done',
      start : 'Nov 24, 2021 11:05:00 PM',
      epstart : 1637751943,
      finish : 'Nov 25, 2021 11:05:00 PM ',
      epfinish : 1637838300,
      duration : '24h',
      eff: 36,
      rej : false,
      stop : "0.50",
      link : "http://www.google.com", 
  },
 {
     id : 705,
    status: 'done',
    start : 'Nov 19, 2021 11:01:00 PM',
    finish : 'Nov 19, 2021 11:58:00 PM',
    epstart : 1637319660,
    epfinish : 1637323080,
    duration : '57m',
    eff: 36,
    rej : false,
    stop : "0.75",
    link : "http://www.google.com" 
  },
  {
    id : 104,
    status: 'done',
    start : 'Nov 19, 2021 10:00:00 AM',
    finish : 'Nov 19, 2021 11:00:00 AM',
    epstart : 1637316000,
    epfinish : 1637319600,
    duration : '1h',
    eff: 36,
    rej : false,
    stop : "0.10",
    link : "http://www.google.com"
  },
  {
    id : 63,
    status: 'done',
    start : 'Nov 18, 2021 17:45:00 PM',
    finish : 'Nov 18, 2021 18:00:00 PM',
    epstart : 1637257500,
    epfinish : 1637258400,
    duration : '15m',
    eff: 47,
    rej : false,
    stop : "0.10",
    link : "http://www.google.com"
  },
  {  
    id : 278,
    status: 'fail',
    start : 'Nov 15, 2021 17:15:00 PM',
    finish : 'Nov 15, 2021 18:15:00 PM',
    epstart : 1636996500,
    epfinish : 1637000100,
    duration : '1h',
    eff: 47,
    rej : false,
    stop : "0.05",
    link : "http://www.google.com"
  },
  {  
    id : 722,
    status: 'done',
    start : 'Jul 20, 2021 14:03:00 PM',
    finish : 'Jul 20, 2021 16:30:00 PM',
    epstart : 1626789780,
    epfinish : 1626798600,
    duration : '2h',
    eff: 47,
    rej : false,
    stop : "0.05",
    link : "http://www.google.com"
  },
  {  
    id : 267,
    status: 'done',
    start : 'Jul 07, 2021 16:19:00 PM',
    finish : 'Jul 07, 2021 16:30:00 PM',
    epstart : 1625674740,
    epfinish: 1625675400,
    duration : '11m',
    eff: 36,
    rej : false,
    stop : "0.05",
    link : "http://www.google.com"
  },
  {  
    id : 777,
    status: 'done',
    start : 'Jul 02, 2021 08:45:00 PM',
    finish : 'Jul 02, 2021 10:45:00 PM',
    epstart : 1625258700,
    epfinish: 1625265900,
    duration : '2h',
    eff: 47,
    rej : false,
    stop : "0.05",
    link : "http://www.google.com"
  },
  {  
    id : 777,
    status: 'done',
    start : 'Jul 01, 2021 09:00:00 AM',
    finish : 'Jul 01, 2021 12:00:00 AM',
    epstart: 1625130000,
    epfinish: 1625140800,
    duration : '3h',
    eff: 35,
    rej : false,
    stop : "0.05",
    link : "http://www.google.com"
  },
  {  
    id : 777,
    status: 'done',
    start : 'Jun 30, 2021 20:38:00 PM',
    finish : 'Jun 30, 2021 21:38:00 PM',
    epstart : 1625085480,
    epfinish : 1625089080,
    duration : '1h',
    eff: 35,
    rej : false,
    stop : "0.05",
    link : "http://www.google.com"
  }
  ];


  const basicData = [
    {x: 0, y: 9.8},
    {x: 2, y: 9.8},
    {x: 4, y: 9.8},
    {x: 6, y: 9.8},
    {x: 8, y: 9.8},
    {x: 10, y: 9.8},
    {x: 12, y: 9.8},
    {x: 14, y: 9.8},
    {x: 16, y: 9.7},
    {x: 18, y: 9.7},
    {x: 20, y: 9.7},
    {x: 22, y: 9.7}
  ];

  const basicDatatwo = [
    {x: 0, y: 10.2},
    {x: 2, y: 10.2},
    {x: 4, y: 10.2},
    {x: 6, y: 10.2},
    {x: 8, y: 10.2},
    {x: 10, y: 10.2},
    {x: 12, y: 10.2},
    {x: 14, y: 10.2},
    {x: 16, y: 10.1},
    {x: 18, y: 10.1},
    {x: 20, y: 10.1},
    {x: 22, y: 10.2}
  ];

  const basicDatatre = [
    {x: 0, y: 10.8},
    {x: 2, y: 10.8},
    {x: 4, y: 10.8},
    {x: 6, y: 10.8},
    {x: 8, y: 10.8},
    {x: 10, y: 10.8},
    {x: 12, y: 10.8},
    {x: 14, y: 10.8},
    {x: 16, y: 10.7},
    {x: 18, y: 10.7},
    {x: 20, y: 10.7},
    {x: 22, y: 10.8}
  ];

  const tickset = [0,2,4,6,8,10,12,2,4,6,8,10,12,14,16,18,20,22];

  const basicDataquattro = [
    {x: 0, y: 10.5},
    {x: 2, y: 10.5},
    {x: 4, y: 10.5},
    {x: 6, y: 10.5},
    {x: 8, y: 10.5},
    {x: 10, y: 10.5},
    {x: 12, y: 10.5},
    {x: 14, y: 10.5},
    {x: 16, y: 10.5},
    {x: 18, y: 10.4},
    {x: 20, y: 10.4},
    {x: 22, y: 10.4}
  ];

  const getBasicData = (fil) => {
    if(!fil) {
      return basicData.filter(item => currentdate >= item.x);
    }
    return basicData.filter(item => fil >= item.x);
  }

  const getDatatwo = (fil) => {
    if(!fil) {
      return basicDatatwo.filter(item => currentdate >= item.x);
    }
    return basicDatatwo.filter(item => fil >= item.x);
  }

  const getDatatre = (fil, data = basicDatatre) => {
    if(!fil) {
      return data.filter(item => currentdate >= item.x);
    }
    return data.filter(item => fil >= item.x);
  }

  const getDataquattro = (fil) => {
    if (!fil) {
    return basicDataquattro.filter(item => currentdate >= item.x);
    }
    return basicDataquattro.filter(item => fil >= item.x);
  }

  const getTickSet = (fil) => {

    if (!fil) {
      return tickset.filter(item => {
        return currentdate >= item;
      });
    }

    console.log("total format ", moment(moment.unix(fil)).hour());
    fil = moment(moment.unix(fil)).hour();
    console.log("fil is ", fil);

    if (fil) {
      return tickset.filter(item => {
        return parseInt(fil) >= item;
      });
    }

    return tickset.filter(item => {
      return currentdate >= item;
    });
  }


  export {
      mockData,
      getBasicData,
      getDatatwo,
      getDatatre,
      getDataquattro,
      getTickSet,
      todayDate,
      leakageTableData
  }

