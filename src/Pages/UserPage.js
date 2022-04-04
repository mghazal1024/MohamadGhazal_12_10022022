import React, {useReducer, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import SideMenu from '../components/SideMenu/sideMenu';
import BodyHeader from '../components/BodyHeader/bodyHeader';
import Charts from '../components/Charts/charts';





const initialState = {
    firstName: null,
    score: null,
    activity: null,
    duration: null,
    performance: null,
    calories: null,
    proteins: null,
    carbohydrate: null,
    fat: null
  }
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_STATE':
        return {
          firstName: action.firstName,
          score: action.score,
          activity: action.activity,
          duration: action.duration,
          performance: action.performance,
          calories: action.calories,
          proteins: action.proteins,
          carbohydrate: action.carbohydrate,
          fat: action.fat
        }
      default:
        return state
    }
  }
    

const UserPage = () => {



    const [state, dispatch] = useReducer(reducer, initialState);
  
    const {userid} = useParams()


  
    useEffect(() => {
  
      const getUrl = (option) => {
        let url = option ? `http://localhost:3000/user/${userid}/${option}` : `http://localhost:3000/user/${userid}`
        return url
      }
  
      const fetchData = async () => {
        try {
          const getScore = () => {
            if(userInfoRes.data.todayScore) {
              return userInfoRes.data.todayScore
            } else if (userInfoRes.data.score) {
              return userInfoRes.data.score
            }
          }
  
          const userInfo = await fetch(getUrl());
          const userInfoRes = await userInfo.json();
  
          const userActivity = await fetch(getUrl('activity'))
          const userActivityRes = await userActivity.json();
  
          const userDuration = await fetch(getUrl('average-sessions'))
          const userDurationRes = await userDuration.json();
  
          const userPeformance = await fetch(getUrl('performance'))
          const userPeformanceRes = await userPeformance.json();
  
          dispatch({
            type: 'UPDATE_STATE',
            firstName: userInfoRes.data.userInfos.firstName,
            score: getScore(),
            activity: userActivityRes.data.sessions,
            duration: userDurationRes.data.sessions,
            performance: userPeformanceRes.data,
            calories: userInfoRes.data.keyData.calorieCount,
            proteins: userInfoRes.data.keyData.proteinCount,
            carbohydrate: userInfoRes.data.keyData.carbohydrateCount,
            fat: userInfoRes.data.keyData.lipidCount,
          })
          
        } catch (error) {
          console.error('error while stting state', error);
        }
      };
  
      fetchData()
      
      
    },[userid])



    return (
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
                performance = {state.performance}
                ></Charts>
            </div>
        </section>
    )
}

export default UserPage