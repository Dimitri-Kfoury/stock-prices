

import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './candleStickChart.css'
import { selectCandles, selectConfigurationOptions } from './candleStickChartSlice'
import { CandleStick } from './candleStickChartElements/CandleStick';



export function CandleStickChart() {

	const configurationOptions = useSelector(selectConfigurationOptions);
	const candles = useSelector(selectCandles);

	useEffect(() => {
/* 		console.log(candles)
 */	})

	const candlesData = candles.data;

	//const candlesData = {c: [146.82], h: [146.97], l: [146.5], o: [146.5], s: 'ok',t: [1629460800]}


	  const dataPoints = [];

	  if (candlesData.s === 'ok'){


const numberOfCandleSticks = candlesData.c.length;
let maxX = Math.max(...candlesData['t']);
let minX = Math.min(...candlesData['t']);
let xAxisLength = maxX - minX;


let minY = Math.min(...candlesData['l']);
let maxY = Math.max(...candlesData['h']);
let yAxisLength = maxY - minY;


maxX += xAxisLength * 0.02;
xAxisLength *= 1.02;




/* maxY = 2 * maxY - minY;
maxX = 2 * maxX - minX;
yAxisLength *= 2;
xAxisLength *= 2;
 */



for(let i = 0; i< numberOfCandleSticks; i++){

dataPoints.push(<CandleStick key={i} timestamp={((candlesData['t'][i] - minX) / xAxisLength) * 100} open={((maxY - candlesData['o'][i]) / yAxisLength) * 100} close={((maxY - candlesData['c'][i]) / yAxisLength) * 100} high={((maxY - candlesData['h'][i]) / yAxisLength) * 100} low={((maxY - candlesData['l'][i]) / yAxisLength) * 100}/>)


}



	  }
	return (
		<div className='candles-chart'>
			<svg width='100%' height={500}>
				<svg width='80%' height='50%' x='10%' y='25%'>
					{dataPoints}
				</svg>
			</svg>
		</div>
	);
}

