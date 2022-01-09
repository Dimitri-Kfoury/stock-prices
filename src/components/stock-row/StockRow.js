
import './stockRow.css'
import arrowUp from './icons/up-triangle.svg'
import arrowDown from './icons/arrow-point-to-down.svg'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';



export function StockRow() {


const {symbol,data} = useSelector(state => state.stockRow.stockData);


  useEffect(() => {


  })






return (
  




   <div className='stock-row'>

<div className='row-indicator column-1'>{symbol}</div>
<div className='row-indicator'>{data.c}$</div>
<div className='row-indicator'>{data.d}</div>
<div className='row-indicator'>{data.dp}%</div>
<div className='row-indicator'><img alt="arrow" width='100%' height='100%' src={data.dp > 0 ? arrowUp : arrowDown}></img></div>
<div className='row-indicator'>{data.o}</div>
<div className='row-indicator'>{data.l}</div>
</div>)











}