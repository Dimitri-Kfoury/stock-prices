
import './stockRow.css'
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';



export function StockRow() {


const {symbol,data} = useSelector(state => state.stockRow.stockData);
const dispatch = useDispatch();


  useEffect(() => {


  })






return (
  
   <div className='stock-row'>

<div className='row-indicator column-1'>{symbol}</div>
<div className='row-indicator'>{data.c}</div>
<div className='row-indicator'>{data.d}</div>
<div className='row-indicator'>{data.dp}</div>
<div className='row-indicator'>{data.o}</div>
<div className='row-indicator'>{data.l}</div>
</div>)











}