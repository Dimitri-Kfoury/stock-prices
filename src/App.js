import "./App.css";

import { StockChart } from "./components/stockChart/StockChart";
import { StockRow } from "./components/stock-row/StockRow";
import {StockSearch} from './components/search/stockSearch'
import {Provider} from 'react-redux'
import store from "./store";
import { useEffect } from "react";


function App() {


useEffect(() => {
  

},[])


  return (


    <Provider store={store}>
    <div className="App">
      <header>
      <div className='search-bar'>

<StockSearch />

        </div>

      </header>

      <main>

       


        <div className="stock-table">
          <StockRow />
        </div>

        <div className="stock-chart">
          <StockChart />
        </div>
      </main>

      <footer>
        {" "}
        Photo by{" "}
        <a href="https://unsplash.com/@eiskonen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Hans Eiskonen
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/stock-market?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </footer>
    </div>
    </Provider>
  );
}

export default App;
