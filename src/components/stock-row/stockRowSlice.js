import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiKey } from '../../constants';

export const quote = createAsyncThunk('stockRow/quote', async (option) => {



  const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${option}&token=${apiKey}`)
  const json = await response.json();


  return { symbol: option, data: json };


})



/* {
  "c": 222.22,
  'd': 22.22,
  'dp': '10%',
  "h": 22263.31,
  "l": 260.68,
  "o": 261.07,
  "pc": 259.45,
  "t": 1582641000 
} */
const initialState = {
  stockData: { symbol: '', data: {}},

  isFetchingQuote: false,
  failedToFetchQuote: false,
  

}

const stockRowSlice = createSlice({
  name: "stockRow",
  initialState,

  extraReducers: {

    [quote.pending]: (state, action) => {

      state.isFetchingQuote = true;
      state.failedToFetchQuote = false;

    },
    [quote.fulfilled]: (state, action) => {
      state.isFetchingQuote = false;
      state.failedToFetchQuote = false;
      state.stockData = action.payload;




    },
    [quote.rejected]: (state, action) => {
      state.isFetchingQuote = false;
      state.failedToFetchQuote = true;
    },

  },

}
);

export default stockRowSlice.reducer;
export const selectIsFetchingQuote = function (state) { return state.stockRow.isFetchingQuote }
