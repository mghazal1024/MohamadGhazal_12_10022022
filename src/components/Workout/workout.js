import React, {PureComponent} from 'react'
import './workout.scss'

import { RadarChart, Legend, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';


const data = [
    {
      "subject": "Intensité",
      "A": 120,
    },
    {
      "subject": "Vitesse",
      "A": 98,
    },
    {
      "subject": "Force",
      "A": 86,
    },
    {
      "subject": "Endurance",
      "A": 99,
    },
    {
      "subject": "Energie",
      "A": 85,
    },
    {
      "subject": "Cardio",
      "A": 65,
    }
  ]
  

const Workout = () => {
    return (
        <div className='workout'>
              <RadarChart outerRadius={90} width={258} height={263} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 120]} />
                <Radar name="Mike" dataKey="A" fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.6} />
                {/* <Legend /> */}
            </RadarChart>
        </div>
    )
}

export default Workout