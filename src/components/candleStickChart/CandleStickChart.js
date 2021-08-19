

import React,{useRef} from 'react';
import { useSelector } from 'react-redux';
import './candleStickChart.css'
import {selectCandles,selectConfigurationOptions} from './candleStickChartSlice'
import { CandleStick } from './candleStickChartElements/CandleStick';



export function CandleStickChart () {
	

const candles = useSelector(selectCandles);




const configurationOptions = useSelector(selectConfigurationOptions);


		return (
		<div className='candles-chart'>

<svg width={45} height={500}>


	<svg width='90%' height='90%' x='5%' y='5%'>
		
	<CandleStick bodyX={15} bodyY={15} bodyHeight={200} isBullish = {true} high={15} low={15}/>
		
		  </svg>

{/* <CandleStick bodyX={30} bodyY={30} bodyHeight={90} isBullish = {true} upperShadowHeight={15} lowerShadowHeight={15}/>
<CandleStick bodyX={80} bodyY={10} bodyHeight={30} isBullish = {true} upperShadowHeight={15} lowerShadowHeight={15}/>
<CandleStick bodyX={110} bodyY={45} bodyHeight={50} isBullish = {true} upperShadowHeight={15} lowerShadowHeight={15}/>
<CandleStick bodyX={140} bodyY={80} bodyHeight={70} isBullish = {true} upperShadowHeight={15} lowerShadowHeight={15}/> */}
</svg>
		</div>
		);
	}

