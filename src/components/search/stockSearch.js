
import React, { useEffect } from 'react';
import {updateOptionActionCreator, selectSelectedOption, selectIsDisabled} from './stockSearchSlice'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select';


const options = [
  { value: 'AAPL', label: 'AAPL' },
  { value: 'AMZN', label: 'AMZN' },
  { value: 'MSFT', label: 'MSFT' },
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

const selectedOption = useSelector(selectSelectedOption);
const isDisabled = useSelector(selectIsDisabled)
const dispatch = useDispatch();

useEffect(() => {

  console.log(selectedOption)



})

const handleChange = function(event) {


dispatch(updateOptionActionCreator(event.value))

}

return (

  <Select
  styles={customStyles}
  value={selectedOption}
  onChange={handleChange}
  options={options}
  placeholder='search stocks'
  isDisabled={isDisabled}
/>);
}


export default StockSearch;