import "./App.css";

import { CandleStickChart } from "./components/candleStickChart/CandleStickChart";
import { StockRow } from "./components/stock-row/StockRow";
import { StockSearch } from './components/search/stockSearch'
import { Provider } from 'react-redux'
import store from "./store";
import { useEffect } from "react";


function App() {


  useEffect(() => {


  }, [])


  return (


    <Provider store={store}>
      <div className="App">
        <header>

          <h1 className='landing-page-heading'> Stock prices visualizer</h1>



        </header>


<div className='search'>
        <label> search for stocks</label>

        <div className='search-bar'>
            <StockSearch />

          </div>
          </div>

        <main>




          <div className="stock-table">
           <StockRow symbol='AAPL'/>
           
          </div>

          <div className="stock-chart">
            <CandleStickChart />
          </div>
        </main>

      </div>
    </Provider>
  );
}

export default App;
