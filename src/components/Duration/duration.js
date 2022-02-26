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
          <LineChart width={258} height={233} data={data}>
            <Tooltip/>
            <XAxis dataKey="name" />
            <Line type="monotone" dataKey="pv" stroke="#fff" strokeWidth={2} />
          </LineChart>
        </div>
    )
}

export default Duration