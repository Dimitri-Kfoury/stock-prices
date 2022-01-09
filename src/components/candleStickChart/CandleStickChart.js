

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './candleStickChart.css'
import { selectCandles } from './candleStickChartSlice'
import { CandleStick } from './candleStickChartElements/CandleStick';



export function CandleStickChart() {

	const candles = useSelector(selectCandles);

	useEffect(() => {

	})

	const candlesData = candles.data;


	const dataPoints = [];
	const xAxisValues = []
	const yAxisValues = []
	
	if (candlesData.s === 'ok') {


		const numberOfCandleSticks = candlesData.c.length;
		let maxX = Math.max(...candlesData['t']);
		let minX = Math.min(...candlesData['t']);
		let xAxisLength = (maxX - minX) || 1;


		let minY = Math.min(...candlesData['l']);
		let maxY = Math.max(...candlesData['h']);
		let yAxisLength = maxY - minY || 1;


		maxX += xAxisLength * 0.02;
		xAxisLength *= 1.02;

		const yAxisStep = 0.075 * yAxisLength;
		const yAxisOrderOfMagnitude = Math.log10(yAxisLength);
		const yAxisDecimalPlaces = yAxisOrderOfMagnitude > 2 ? 0 : Math.abs(Math.floor(yAxisOrderOfMagnitude) - 1);
		

		const xAxisStep = 0.1 * xAxisLength;

		// Drawing Y and X axis

		for (let i = 0; i < 12; i++) {

			const y = ((i + 1) * 7.5 ); // y coordinate of line markers (every 7.5% of the length of the Y axis) 


			const yValue = (maxY - (i- 1) * yAxisStep).toFixed(yAxisDecimalPlaces); // value of each marker on the Y axis
			

			// Y axis line marker and value
			yAxisValues.push(<line key={'yAxisMarker' + i} x1='9.5%' x2='10.5%' y1={y + '%'} y2={y + '%'} strokeWidth={1} stroke={'black'}></line>);
			yAxisValues.push(<text key={'yAxisValue' + i} x='9.0%' y={(y - 1) + '%'} textAnchor='end' className='y-axis-values'>{yValue} </text>);

			
		}


		for (let i = 0; i < 9; i++) {

			const x = ((i + 1) * 10 )// x coordinate of line markers (every 10% of the length of the X axis)

			
			const xValue = new Date((minX + i * xAxisStep).toFixed(0) * 1000); // value of each marker on the X axis

			
			// X axis line marker and value
			xAxisValues.push(<line key={'xAxisMarker' + i} x1={x + '%'} x2={x + '%'} y1='91.5%' y2='93.5%' strokeWidth={1} stroke={'black'}></line>);
			xAxisValues.push(<text key={'xAxisValue' + i} x={x + '%'} y='95.5%' textAnchor='middle' className='x-axis-values'>{xValue.getDay() + '/' + xValue.getMonth() + ' ' + xValue.getHours() + ': ' + xValue.getMinutes()}</text>);

		}


		for (let i = 0; i < numberOfCandleSticks; i++) {

			const timestamp = ((candlesData['t'][i] - minX) / xAxisLength) * 100;

			dataPoints.push(<CandleStick key={i} timestamp={timestamp} open={((maxY - candlesData['o'][i]) / yAxisLength) * 100} close={((maxY - candlesData['c'][i]) / yAxisLength) * 100} high={((maxY - candlesData['h'][i]) / yAxisLength) * 100} low={((maxY - candlesData['l'][i]) / yAxisLength) * 100} />)

		}


	}
	return (
		<div className='candles-chart'>

<svg className='container-svg'>


<text x='50%' y='5%' textAnchor="middle" className='chart-title'> {candles.symbol} Candlestick Chart</text>

		<text textAnchor="middle" className='y-axis-label'> price in $USD</text>
				<text
					textAnchor="middle" className='x-axis-label'>Timestamp</text>


			<svg x='3.5%' y='3.5%' width='96%' height='93%'>

				{yAxisValues}
				{xAxisValues}	

				<line x1='10%' x2='10%' y1='7.5%' y2='92.5%' strokeWidth={1} stroke={'black'} className='y-axis-line'></line>
				<line x1='10%' x2='100%' y1='92.5%' y2='92.5%' strokeWidth={1} stroke={'black'} className='x-axis-line'></line>

				<svg width='90%' height='70%' x='10%' y='15%'>
					{dataPoints}
				</svg>
			</svg>

			</svg>
		</div>
	);
}

