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
          <label className='search-label'> search for stocks</label>
          <div className='search-bar'>
            <StockSearch />
          </div>
        </div>

        <main>
          <section className='quote-section'>
            <h3 className='quote-heading'>Quote</h3>
            <div className="quote">
              <StockRow symbol='AAPL' />
            </div>
          </section>

          <section className='chart-section'>
            <h3 className='candlestick-chart-heading'>Candlestick Chart</h3>
            <div className="stock-chart">
              <CandleStickChart />
            </div>
          </section>
        </main>

        <footer> Photo by <a href="https://unsplash.com/@bloggingguide?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Blogging Guide</a> on <a href="https://unsplash.com/s/photos/stock-market?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </footer>

      </div>
    </Provider>
  );
}

export default App;
