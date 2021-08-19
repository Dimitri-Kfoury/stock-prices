import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiKey } from '../../constants';





export const fetchCandles = createAsyncThunk('stockRow/updateCandles', async (symbol = '', thunk ,resolution = 30, from = (Date.now() - 24*3600*1000), to = Date.now()) => {

    

    const response = await fetch(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${Math.floor(from / 1000)}&to=${Math.floor(to / 1000)}&token=${apiKey}`)
    const json = await response.json();
    let chartformattedData;


    return { symbol: symbol, data: chartformattedData };


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
    candles: { symbol: '', data: []},
    configurationOptions: {},
    isFetchingCandles: false,
    failedToFetchCandles: false,

}

const stockChartSlice = createSlice({
    name: "stockChart",
    initialState,

    extraReducers: {

        [fetchCandles.pending]: (state, action) => {

            state.isFetchingCandles = true;
            state.failedToFetchCandles = false;

        },

        [fetchCandles.fulfilled]: (state, action) => {
            state.isFetchingCandles = false;
            state.failedToFetchCandles = false;
            state.candles = action.payload;

        },
        [fetchCandles.rejected]: (state, action) => {
            state.isFetchingCandles = false;
            state.failedToFetchCandles = true;
        }

    },

}
);

export default stockChartSlice.reducer;
export const selectIsFetchingCandles = function (state) { return state.stockChartSlice.isFetchingCandles }
export const selectCandles = function (state) { return state.stockChartSlice.candles }
export const selectConfigurationOptions = function(state) {return state.stockChartSlice.configurationOptions}