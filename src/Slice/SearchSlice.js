import { createSlice,current } from '@reduxjs/toolkit';
import {mockData} from "../Data/index";

const initialState = {
  default : mockData,
  filtered : [],
  filterparam : {
    status : [],
    startDate : null,
    endDate : null,
    active : false
  }
};

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setStatus : (state, action) => {
      console.log("setStatusReducer", current(state));
      state.filterparam.status = action.payload;
      return state;
    },
    deleteItem : (state, action) => {
      console.log("deleteItem", current(state));
      return current(state).filter(item => {
         if (item.id != action.payload) {
           return true;
         }
      });
    },
    clearFilter: (state, action) => {
      console.log("clearFilter execute");
      state.filtered = [];
      state.filterparam.status = [];
     return state;
    },
    setFilterDate: (state, action) => {
      console.log("setFilterDate ", current(state));
     console.log("setFilterDate payload", action.payload);
     state.filterparam[action.payload.key] = action.payload.value;
     return state;
    },
    executeSearchFilter : (state, {payload}) => {
      console.log("executeFilter ", current(state));
      const params = current(state).filterparam;

      if (params.status.length > 0) {
        state.filtered = payload.filter((item) => {
         return params.status.includes(item.status);
        });
      }

      if (params.startDate || params.endDate ) {
          if (state.filtered.length > 0) {
              state.filtered = payload.filter((item) => {
                console.log("name element ", item.name);
                console.log("check dateFilter ", item.epstart >= parseInt(params.startDate)  && parseInt(params.endDate) >= item.epfinish);
                if ( item.epstart >= parseInt(params.startDate)  && parseInt(params.endDate) >= item.epfinish ) {
                  return true;
                }
              });
          }else {
            state.filtered = payload.filter((item) => {
              console.log("name element ", item.name);
              console.log("check dateFilter ", item.epstart >= parseInt(params.startDate)  && parseInt(params.endDate) >= item.epfinish);
              if ( item.epstart >= parseInt(params.startDate)  && parseInt(params.endDate) >= item.epfinish ) {
                return true;
              }
           });
          }
      }

      return state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFilterDate,deleteItem,setStatus, executeSearchFilter, clearFilter } = SearchSlice.actions;

export default SearchSlice.reducer;
