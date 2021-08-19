

import React from 'react';
import { useSelector } from 'react-redux';
import {} from 'react-chartjs-2'

import './stockChart.css'
import {selectCandles,selectConfigurationOptions} from './stockChartSlice'


export function StockChart () {
	

const candles = useSelector(selectCandles);




const configurationOptions = useSelector(selectConfigurationOptions);

		return (
		<div className='candles-chart'>


		</div>
		);
	}

