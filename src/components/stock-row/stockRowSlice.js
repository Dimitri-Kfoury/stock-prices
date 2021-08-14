import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';

/* export const updateRow = createAsyncThunk('stockRow/update',async (symbol) => {


  return {
    "c": 22.22,
    'd': 22.22,
    'dp': '10%',
    "h": 22263.31,
    "l": 260.68,
    "o": 261.07,
    "pc": 259.45,
    "t": 1582641000 
  };

  
  }) */

const initialState = {

  stockData:{
    "c": 222.22,
    'd': 22.22,
    'dp': '10%',
    "h": 22263.31,
    "l": 260.68,
    "o": 261.07,
    "pc": 259.45,
    "t": 1582641000 
  }
}

const stockRowSlice = createSlice({
  name: "stockRow",
  initialState,
  reducers: {
    update(state,action){


    }
  },
});

export default stockRowSlice.reducer;
export const selectStockData = (state) => state.stockRow.stockData;
export const updateRow = stockRowSlice.actions.update;