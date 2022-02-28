import React, {PureComponent} from 'react'
import './score.scss'

import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 100 }
];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Score = () => {
    return (
        <div className='score'>          
            <PieChart width={258} height={263}>
              <Pie
                data={data}
                nameKey="name"
                innerRadius={65}
                outerRadius={80}
                paddingAngle={1}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#FF0000" cornerRadius="50%" />
                ))}
              </Pie>
              <Pie
                data={data}
                innerRadius={0}
                outerRadius={65}
                paddingAngle={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#fff"/>
                ))}
              </Pie>
            </PieChart>
            <div className='score__progress'>
              <h3>12%</h3>
              <p className='body-text body-text--large'>de votre objectif</p>
            </div>
        </div>
    )
}

export default Score