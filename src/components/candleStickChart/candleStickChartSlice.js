import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiKey } from '../../constants';





export const fetchCandles = createAsyncThunk('candleStickChart/updateCandles', async (symbol = '', thunk, resolution = 60, from = Math.floor(Date.now() / 1000) - 72 * 3600, to = Math.floor((Date.now()) / 1000)) => {

    const response = await fetch(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${apiKey}`)
    const json = await response.json();

    return { symbol: symbol, data: json };


})
const initialState = {
    candles: { symbol: '', data: [] },
    configurationOptions: {},
    isFetchingCandles: false,
    failedToFetchCandles: false,

}

const candleStickChartSlice = createSlice({
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

export default candleStickChartSlice.reducer;
export const selectIsFetchingCandles = function (state) { return state.candleStickChart.isFetchingCandles }
export const selectCandles = function (state) { return state.candleStickChart.candles }
export const selectConfigurationOptions = function (state) { return state.candleStickChart.configurationOptions }