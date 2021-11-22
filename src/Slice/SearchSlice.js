import { createSlice,current } from '@reduxjs/toolkit';

const initialState = [
  {
    id : 994,
    name : "test Dario",
    status: true,
    start : 'Nov 19 2021 10:00 AM',
    finish : '19, 2021 11:00 AM',
    duration : 1,
    eff: 0.00,
    rej : false,
    stop : "0.50",
    link : "http://www.google.com", 
},
{
  id : 705,
  name : "test foo",
  status: true,
  start : 'Nov 26 2021 10:00 AM',
  finish : '19, 2021 11:00 AM',
  duration : 3,
  eff: 36.61,
  rej : 27.03,
  stop : "0.75",
  link : "http://www.google.com" 
},
{
  id : 104,
  name: 'test bar', 
  status: true,
  start : 'Ag 26 2021 01:00 AM',
  finish : 'Ag 30, 2021 03:00 AM',
  duration : 2,
  eff: 75.81,
  rej : 11.03,
  stop : "0.10",
  link : "http://www.google.com"
},
{  
  id : 278,
  name: 'test baz', 
  status: false,
  start : 'Oct 16 2021 01:00 AM',
  finish : 'Oct 17, 2021 08:00 AM',
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
