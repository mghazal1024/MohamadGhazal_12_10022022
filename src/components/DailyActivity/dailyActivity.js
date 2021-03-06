import React from 'react';
import './dailyActivity.scss';
import propTypes from 'prop-types';


import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend} from 'recharts';


  /**
 * Component takes an array which contains the information to display on the graph
 * @typedef PropType 
 * @property {array} activity
 */

/**
 * @param {PropType} props
 * @returns {JSX}
 */



const DailyActivity = (props) => {


  const { activity } = props


  let activityData = [];


  const getActivityData = (activity) => {
    for(let item of activity) {
      activityData.push({
        calories: item.calories,
        day: activity.indexOf(item) + 1,
        kilogram: item.kilogram
      })
    }
  }

  activity && getActivityData(activity);



    return (
        <div className='daily-activity'>
            <div className='bar-graph'>
              <div className='bar-graph__header'>
                  <p className='bar-graph__title'>
                    Activité quotidienne
                  </p>
              </div>
              
              <BarChart
                width={835}
                height={280}
                data={activityData}
                >
                  <CartesianGrid strokeDasharray="3" vertical={false} horizontalPoints={[10,100]} />
                  <XAxis dataKey="day" />
                  <YAxis orientation='right' />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{
                      fill: "rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="kilogram" fill="#282D30" legendType='circle' barSize={7} radius={[50, 50, 0, 0]}/>
                  <Bar dataKey="calories" fill="#E60000" legendType='circle' barSize={7} radius={[50, 50, 0, 0]}/>
              </BarChart>
            </div>
        </div>
    )
}


const CustomTooltip = ({ active, payload }) => {
  if(active && payload) {
    return (
      <div className='bar-graph__tooltip'>
       <p className='bar-graph__tooltip-text'>{`${payload[0].value} kg`}</p>
       <p className='bar-graph__tooltip-text'>{`${payload[1].value} kCal`}</p>
     </div>
    )
  }

  return null;
}



export default DailyActivity




DailyActivity.prototype = {
  activity: propTypes.array
}