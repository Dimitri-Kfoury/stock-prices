import {configureStore} from '@reduxjs/toolkit'
import stockSearchSlice from './components/search/stockSearchSlice';
import stockRowSliceReducer from './components/stock-row/stockRowSlice';
import stockSearchSliceReducer from './components/search/stockSearchSlice'

export default configureStore({
    reducer: {
      stockRow: stockRowSliceReducer,
      stockSearch: stockSearchSliceReducer,
    }
  });
  