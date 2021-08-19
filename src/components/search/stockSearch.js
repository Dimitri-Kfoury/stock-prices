
import React, { useEffect } from 'react';
import {updateOptionActionCreator} from './stockSearchSlice'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select';
import { quote,selectIsFetchingQuote } from '../stock-row/stockRowSlice';
import { fetchCandles,selectIsFetchingCandles } from '../stockChart/stockChartSlice';

const options = [
  { value: 'AAPL', label: 'AAPL' },
  { value: 'AMZN', label: 'AMZN' },
 
];
const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    padding: 5,
    fontSize: '1rem',
    marginTop:0,
    borderRadius:0,
    }),
    control: (provided,state) => ({

      ...provided,
      borderRadius:0,
      height:30,
      minHeight:30,
      alignContent: 'center'
      
    })
    ,
    container: (provided,state) => ({

      ...provided,
      borderRadius:0,
      height:30,

    }),
    

}
export const StockSearch = () => { 

const isDisabled = useSelector(selectIsFetchingQuote)
const dispatch = useDispatch();

useEffect(() => {


})

const handleChange = function(event) {


dispatch(updateOptionActionCreator(event.value))
dispatch(quote(event.value))
dispatch(fetchCandles(event.value,15))

}

return (

  <Select
  styles={customStyles}
  onChange={handleChange}
  options={options}
  placeholder='search stocks'
  isDisabled={isDisabled}
/>);
}


export default StockSearch;