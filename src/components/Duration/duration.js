import React from 'react'
import './duration.scss'
import propTypes from 'prop-types';

import { LineChart, Line, Tooltip } from "recharts";

  /**
 * Component takes an array which contains the information to display on the graph
 * @typedef PropType 
 * @property {array} duration
 */

/**
 * @param {PropType} props
 * @returns {JSX}
 */

const Duration = ( props ) => {

  const { duration } = props;

    return (
        <div className='duration'>
          <p className='duration__title'>Durée moyenne des sessions</p>
          <LineChart width={258} height={203} data={duration}
          >
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: "100%"
              
            }}
          />
            <Line
              type="monotone"
              dataKey="sessionLength"
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
        <p className='duration__tooltip'>{`${payload[0].value} min`}</p>
        </>
      );
    }

    return null;
}


export default Duration

Duration.propTypes = {
  duration: propTypes.array
}