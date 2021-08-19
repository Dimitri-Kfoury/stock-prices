import {configureStore} from '@reduxjs/toolkit'
import stockSearchSlice from './components/search/stockSearchSlice';
import stockRowSliceReducer from './components/stock-row/stockRowSlice';
import stockSearchSliceReducer from './components/search/stockSearchSlice'
import candleStickChartSliceReducer from './components/candleStickChart/candleStickChartSlice';

export default configureStore({
    reducer: {
      stockRow: stockRowSliceReducer,
      stockSearch: stockSearchSliceReducer,
      candleStickChartSlice: candleStickChartSliceReducer,
    }
  });
  