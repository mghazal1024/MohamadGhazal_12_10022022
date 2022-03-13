import React, {useEffect, useState} from 'react'
import './App.scss';
import dataFetch from './dataFetch';
import BodyHeader from './components/BodyHeader/bodyHeader';
import Charts from './components/Charts/charts';

import Header from './components/Header/header'
import SideMenu from './components/SideMenu/sideMenu';

const App = () => {

  const [state, setState] = useState({
    firstName: null,
    score: null,
    calories: null,
    proteins: null,
    carbohydrate: null,
    fat: null,
    activity: null,
    duration: null,
    performance: null
  })

  useEffect(() => {

    const getUrl = (id, option) => {
      let url = option ? `http://localhost:3000/user/${id}/${option}` : `http://localhost:3000/user/${id}`
      console.log(url)
      return url
    }

    let userId = 12;

    const fetchData = async () => {
      try {
        const userInfo = await fetch(getUrl(userId));
        const userInfoRes = await userInfo.json();


        const userActivity = await fetch(getUrl(userId, 'activity'))
        const userActivityRes = await userActivity.json();

        const userDuration = await fetch(getUrl(userId, 'average-sessions'))
        const userDurationRes = await userDuration.json();

        const userPeformance = await fetch(getUrl(userId, 'performance'))
        const userPeformanceRes = await userPeformance.json();

        const getScore = () => {
          if(userInfoRes.data.todayScore) {
            return userInfoRes.data.todayScore
          } else if (userInfoRes.data.score) {
            return userInfoRes.data.score
          }
        }
        setState({
          score: getScore(),
          firstName: userInfoRes.data.userInfos.firstName,
          calories: userInfoRes.data.keyData.calorieCount,
          proteins: userInfoRes.data.keyData.proteinCount,
          carbohydrate: userInfoRes.data.keyData.carbohydrateCount,
          fat: userInfoRes.data.keyData.lipidCount,
          activity: userActivityRes.data.sessions,
          duration: userDurationRes.data.sessions,
          performance: userPeformanceRes.data
        })
        console.log(state.performance)
      } catch (error) {
        console.log('error while stting state', error);
      }
    };

    fetchData()
  }, [])

  return (
    <div className="app">
        <Header></Header>
          <section className='body-section'>
            <SideMenu></SideMenu>
            <div className="body-container">
              <BodyHeader
                firstName = {state.firstName}
              ></BodyHeader>
              <Charts
                score = {state.score}
                calories = {new Intl.NumberFormat('en-IN').format(state.calories)}
                proteins = {state.proteins}
                carbohydrate = {state.carbohydrate}
                fat = {state.fat}
                activity = {state.activity}
                duration = {state.duration}
                performance = {state.performance && state.performance}
              ></Charts>
            </div>
          </section>
      </div>
  )
}

export default App