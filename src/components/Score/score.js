import React, {PureComponent} from 'react'
import './score.scss'
import propTypes from 'prop-types';
import { PieChart, Pie, Cell } from "recharts";


const Score = ( props ) => {

  const {score} = props

  const data = [
    { name: "Group A", value: score }
  ];


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
                endAngle={90 + (score * 360)}
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
              <h3>{score * 100}%</h3>
              <p className='body-text body-text--large'>de votre objectif</p>
            </div>
        </div>
    )
}

export default Score

Score.propTypes = {
  score: propTypes.number
}