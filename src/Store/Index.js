import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../Slice/SearchSlice';

export const store = configureStore({
  reducer: {
    foo : searchReducer
  },
});
