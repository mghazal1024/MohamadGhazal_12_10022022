import React, {PureComponent} from 'react'
import './score.scss'

import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 }
];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Score = () => {
    return (
        <div className='score'>                                    
            {/* <RadialBarChart 
                width={258} 
                height={263} 
                innerRadius="10%" 
                outerRadius="100%" 
                data={data} 
                startAngle={180} 
                endAngle={0}
            >
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                <Tooltip />
            </RadialBarChart> */}
            <PieChart width={258} height={263}>
              <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
        </div>
    )
}

export default Score