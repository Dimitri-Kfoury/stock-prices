import { useEffect } from "react"


export function CandleStick ({timestamp, high, low, open , close}) {

const isBullish = close < open;
const timestampStr = (timestamp + 1 )+ '%';
const candleSickColor = isBullish ? 'green' : 'red'
const bodyY = (isBullish ? close : open) + '%'
const bodyHeight = Math.abs(open - close)

useEffect(() => {
})

return (


<g opacity= {1}>
<line x1={timestampStr} x2={timestampStr} y1={high + '%'} y2={bodyY} strokeWidth={1} stroke={candleSickColor}></line>
<rect x={(timestamp) + '%'} y={bodyY} width='2%' height={bodyHeight + '%'} fill={candleSickColor}></rect>
<line x1={timestampStr} x2={timestampStr} y1={(isBullish ? open : close) + '%'} y2={low + '%'} strokeWidth={1} stroke={candleSickColor}></line>
</g>





)




}