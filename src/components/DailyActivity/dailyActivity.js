import React, { PureComponent } from 'react';
import './dailyActivity.scss';

import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, 
  ResponsiveContainer} from 'recharts';

const data = [
    {
      "day": "1",
      "poids": 70,
      "calories": 71
    },
    {
      "day": "2",
      "poids": 50,
      "calories": 65
    },
    {
      "day": "3",
      "poids": 43,
      "calories": 34
    },
    {
      "day": "4",
      "poids": 67,
      "calories": 69
    },
    {
      "day": "5",
      "poids": 20,
      "calories": 45
    },
    {
      "day": "6",
      "poids": 40,
      "calories": 63
    },
    {
      "day": "7",
      "poids": 21,
      "calories": 58
    },
    {
      "day": "8",
      "poids": 16,
      "calories": 49
    },
    {
      "day": "9",
      "poids": 21,
      "calories": 49
    },
    {
      "day": "10",
      "poids": 10,
      "calories": 69
    }
  ]


const DailyActivity = () => {
    return (
        <div className='daily-activity'>
            {/* <h2>Daily Activity</h2> */}

            <div className='bar-graph'>
              <div className='bar-graph__header'>
                  <p className='bar-graph__title'>
                    Activité quotidienne
                  </p>
              </div>
              {/* <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={835}
                height={280}
                data={data}>
                  <CartesianGrid strokeDasharray="3" vertical={false} horizontalPoints={[10,100]} />
                  <XAxis dataKey="name" />
                  <YAxis orientation='right' />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="poids" fill="#282D30" legendType='circle' barSize={7}/>
                  <Bar dataKey="calories" fill="#E60000" legendType='circle' barSize={7}/>
              </BarChart>
              </ResponsiveContainer> */}
              <BarChart
                width={835}
                height={280}
                data={data}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#dedede" 
                  />
                  <XAxis
                    dataKey="day"
                    dy={16}
                    padding={{ left: -48, right: -48 }}
                    stroke="#9b9eac"
                    tickLine={false}
                    tick={{ fontSize: 14, fontWeight: 500 }}
                    />
                  <YAxis
                    dataKey="poids"
                    domain={["dataMin - 1", "dataMax + 2"]}
                    allowDecimals={false}
                    dx={48}
                    orientation="right"
                    stroke="#9b9eac"
                    axisLine={false}
                    tickLine={false}
                   />
                   <YAxis
                    yAxisId="cal"
                    dataKey="calories"
                    domain={[0, "dataMax + 50"]}
                    hide={true}
                  />
                  <Tooltip />
                  {/* <Tooltip
                    content={<CustomTooltip />}
                    cursor={{
                      fill: "rgba(0, 0, 0, 0.1)",
                    }}
                  /> */}
                  <Legend />
                  <Bar dataKey="poids" fill="#282D30" legendType='circle' barSize={7} 
                    radius={[50, 50, 0, 0]}/>
                  <Bar dataKey="calories" fill="#E60000" legendType='circle' barSize={7} 
                    radius={[50, 50, 0, 0]}/>
              </BarChart>
            </div>
        </div>
    )
}



// const CustomTooltip = () => {
//   return (
//     <div>
//       <p></p>
//     </div>
//   )
// }

export default DailyActivity