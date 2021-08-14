
import './stockRow.css'
import { useEffect } from 'react';
import { selectSelectedOption} from '../search/stockSearchSlice';
import { useSelector,useDispatch } from 'react-redux';
import { selectStockData } from './stockRowSlice';



export function StockRow() {

const stockData = useSelector(selectStockData);

const symbol = useSelector(selectSelectedOption);


  useEffect(() => {





  },[])








return (
  
   <div className='stock-row'>

<div className='row-indicator column-1'>{symbol}</div>
<div className='row-indicator'>{stockData.c}</div>
<div className='row-indicator'>{stockData.d}</div>
<div className='row-indicator'>{stockData.dp}</div>
<div className='row-indicator'>{stockData.o}</div>
<div className='row-indicator'>{stockData.l}</div>
</div>)











}