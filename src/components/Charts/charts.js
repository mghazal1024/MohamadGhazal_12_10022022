import React from 'react';
import BurnCount from '../BurnCount/burnCount';
import './charts.scss';

import fire from '../../images/fire.svg';
import chicken from '../../images/chicken.svg';
import apple from '../../images/apple.svg';
import cheesburger from '../../images/cheeseburger.svg'
import DailyActivity from '../DailyActivity/dailyActivity';
import Duration from '../Duration/duration';
import Workout from '../Workout/workout';
import Score from '../Score/score';


const Charts = (props) => {

    const { score, calories, proteins, carbohydrate, fat, activity, duration, performance } = props;

    return(
        <>
            <section className='charts-section'>
                <div className='charts-section__charts'>
                    <DailyActivity
                        activity = {activity}
                    ></DailyActivity>
                    <Duration
                        duration = {duration}
                    ></Duration>
                    <Workout
                        performance = {performance}
                    ></Workout>
                    <Score
                        score = {score}
                    ></Score>
                </div>
                <aside className='charts-section__aside'>
                    <BurnCount
                        icon = {fire}
                        total = {`${calories}kCal`}
                        type = "Calories"
                    ></BurnCount>
                    <BurnCount
                        icon = {chicken}
                        total = {`${proteins}g`}
                        type = "Proteines"
                    ></BurnCount>
                    <BurnCount
                        icon = {apple}
                        total = {`${carbohydrate}g`}
                        type = "Glucides"
                    ></BurnCount>
                    <BurnCount
                        icon = {cheesburger}
                        total = {`${fat}g`}
                        type = "Lipides"
                    ></BurnCount>
                </aside>
            </section>
        </>
    )
}

export default Charts