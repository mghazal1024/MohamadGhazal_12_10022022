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
const Charts = () => {
    return(
        <>
            <section className='charts-section'>
                <div className='charts-section__charts'>
                    <DailyActivity></DailyActivity>
                    <Duration></Duration>
                    <Workout></Workout>
                    <Score></Score>
                </div>
                <aside className='charts-section__aside'>
                    <BurnCount
                        icon = {fire}
                        total = "1,930kCal"
                        type = "Calories"
                    ></BurnCount>
                    <BurnCount
                        icon = {chicken}
                        total = "155g"
                        type = "Proteines"
                    ></BurnCount>
                    <BurnCount
                        icon = {apple}
                        total = "290g"
                        type = "Glucides"
                    ></BurnCount>
                    <BurnCount
                        icon = {cheesburger}
                        total = "50g"
                        type = "Lipides"
                    ></BurnCount>
                </aside>
            </section>
        </>
    )
}

export default Charts