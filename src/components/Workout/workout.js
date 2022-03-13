import React from 'react'
import './workout.scss'

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';


const Workout = (props) => {

  const { performance } = props
  console.log(performance.data)
  console.log(performance.kind)

  const performanceKind = Object.keys(performance.kind);
  const kinds = []

  performanceKind.map((key, index) => {
    kinds.push(performance.kind[key])
  })


  const allActivities = [];

  for (let kind of kinds) {
    console.log(kinds.indexOf(kind))
    for (let activity of performance.data) {
      if(kinds.indexOf(kind) === activity.kind - 1) {
        allActivities.push({
          activity: kind,
          value: activity.value
        })
      }
    }
  }

  console.log(allActivities)
 
    return (
        <div className='workout'>
              <RadarChart outerRadius={90} width={258} height={263} data={allActivities}>
                <PolarGrid />
                <PolarAngleAxis dataKey="activity" />
                <PolarRadiusAxis angle={30} domain={[0, 120]} />
                <Radar name="Mike" dataKey="value" fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.6} />
            </RadarChart>
        </div>
    )
}

export default Workout