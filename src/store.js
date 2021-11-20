import {configureStore} from '@reduxjs/toolkit'
import stockRowSliceReducer from './components/stock-row/stockRowSlice';
import stockSearchSliceReducer from './components/search/stockSearchSlice'
import candleStickChartSliceReducer from './components/candleStickChart/candleStickChartSlice';

export default configureStore({
    reducer: {
      stockRow: stockRowSliceReducer,
      stockSearch: stockSearchSliceReducer,
      candleStickChart: candleStickChartSliceReducer,
    }
  });
  