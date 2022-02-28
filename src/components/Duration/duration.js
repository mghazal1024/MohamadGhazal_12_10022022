import React, {PureComponent} from 'react'
import './duration.scss'

import { LineChart, Line, Tooltip, XAxis } from "recharts";


const data = [
  {
    name: "L",
    pv: 100
  },
  {
    name: "M",
    pv: 130
  },
  {
    name: "M",
    pv: 200
  },
  {
    name: "J",
    pv: 80
  },
  {
    name: "V",
    pv: 110
  },
  {
    name: "S",
    pv: 210
  },
  {
    name: "S",
    pv: 300
  }
];
  
                        


const Duration = () => {
    return (
        <div className='duration'>
          <p className='duration__title'>Durée moyenne des sessions</p>
          <LineChart width={258} height={263} data={data}
          // margin={{ top: 20, right: 12, bottom: 0, left: 12 }}
          >
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: "100%"
              
            }}
            // cursor={<CustomCursor />}
          />
            {/* <XAxis dataKey="name" /> */}
            <Line
              type="monotone"
              dataKey="pv"
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                stroke: "rgba(255,255,255, 0.6)",
                strokeWidth: 10,
                r: 5,
              }}
            />
          </LineChart>
          <ul className='duration__days'>
            <li>L</li>
            <li>M</li>
            <li>M</li>
            <li>J</li>
            <li>V</li>
            <li>S</li>
            <li>S</li>
          </ul>
        </div>
    )
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
      return (
        <>
          {/* <div className='duration__tooltip'></div> */}
        <p className='duration__tooltip'>{`${payload[0].value} min`}</p>
        </>
      );
    }

    return null;
}

// const CustomCursor = () => {
//   return (
//     <div className='duration__cursor'></div>
//   )
// }


export default Duration