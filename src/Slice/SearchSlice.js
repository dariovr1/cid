import { createSlice,current } from '@reduxjs/toolkit';

const initialState = [
  {
    id : 994,
    name : "test Dario",
    status: 'done',
    start : 1637316000000,
    finish : 1637323200000,
    duration : 1,
    eff: 0.00,
    rej : false,
    stop : "0.50",
    link : "http://www.google.com", 
},
{
  id : 705,
  name : "test foo",
  status: 'done',
  start : 1637920800000,
  finish : 1638093600000,
  duration : 3,
  eff: 36.61,
  rej : 27.03,
  stop : "0.75",
  link : "http://www.google.com" 
},
{
  id : 104,
  name: 'test bar', 
  status: 'done',
  start : 1629939600000,
  finish : 1630292400000,
  duration : 2,
  eff: 75.81,
  rej : 11.03,
  stop : "0.10",
  link : "http://www.google.com"
},
{
  id : 4791,
  name: 'test progress', 
  status: 'progress',
  start : 1630476000000,
  finish : 1630656000000,
  duration : 8,
  eff: 67.81,
  rej : 10.03,
  stop : "0.10",
  link : "http://www.google.com"
},
{
  id : 8671,
  name: 'test progress 2', 
  status: 'progress',
  start : 1599026400000,
  finish : 1599717600000,
  duration : 6,
  eff: 75.81,
  rej : 11.03,
  stop : "0.10",
  link : "http://www.google.com"
},
{
  id : 5197,
  name: 'test progress 3', 
  status: 'progress',
  start : 1638350400000,
  finish : 1638436860000,
  duration : 6,
  eff: 75.81,
  rej : 11.03,
  stop : "0.10",
  link : "http://www.google.com"
},
{  
  id : 278,
  name: 'test baz', 
  status: 'fail',
  start : 1634338800,
  finish : 1634450400,
  duration : 3,
  eff: 25.09,
  rej : false,
  stop : "0.05",
  link : "http://www.google.com"
}
]

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    deleteItem : (state, action) => {
      console.log("deleteItem", current(state));
      return current(state).filter(item => {
         if (item.id != action.payload) {
           return true;
         }
      });
    },
    searchByWord: (state, action) => {
      console.log("searchWord", current(state));
      const matchFilter = current(state).filter(item => {
         return item.name.includes(action.payload);
      });
      console.log("match is ", matchFilter);
      return matchFilter;
     // console.log("hi from searchByWord ", action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { searchByWord,deleteItem } = SearchSlice.actions;

export default SearchSlice.reducer;
