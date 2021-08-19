import { useEffect } from "react"


export function CandleStick ({bodyX, bodyY, bodyHeight, isBullish, upperShadowHeight, lowerShadowHeight}) {


const candleSickColor = isBullish ? 'green' : 'red'

useEffect(() => {



})

return (


<g opacity= {1}>
<line x1={bodyX + 5} x2={bodyX + 5} y1={upperShadowHeight} y2={bodyY} strokeWidth={1} stroke={candleSickColor}></line>
<rect x={bodyX} y={bodyY} width='10' height={bodyHeight} fill={candleSickColor}></rect>
<line x1={bodyX + 5} x2={bodyX + 5} y1={bodyY + bodyHeight} y2={lowerShadowHeight} strokeWidth={1} stroke={candleSickColor}></line>
</g>





)




}