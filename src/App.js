import React, {useEffect, useState} from 'react'
import './App.scss';
import axios from 'axios';
import dataFetch from './dataFetch';
import BodyHeader from './components/BodyHeader/bodyHeader';
import Charts from './components/Charts/charts';

import Header from './components/Header/header'
import SideMenu from './components/SideMenu/sideMenu';


// function App() {

//   const [data, setData] = useState(
//     {
//       emptyData: false,
//       goal: null,
//       goalIsLoading: false,
//     }
//   );

//   // useEffect(() => {
//   //   dataFetch(12).then(data => {
//   //     if(Object.keys(data).length === 0) {
//   //       console.error('Error while getting data from API');
//   //       setData({emptyData: true});
//   //       console.log(`1 ${data}`)
//   //     } else {
//   //       setData({emptyData: false});
//   //       console.log(`2 ${data}`)
//   //     }
//   //   })
//   //   if (data.emptyData === false) {
//   //     dataFetch(12).then(data => {
//   //       setData({emptyData: false, goal: data.todayScore, goalIsLoading: true})
//   //       console.log(`3 ${data}`)
//   //     })
//   //   }
//   // }, [])


// //  const [userDataPerformance, setUserDataPerformance] = useState();

// //  useEffect(() => {
// //    fetch('http://localhost:3000/user/12/performance')
// //     .then(res => {
// //       return res.json();
// //     })
// //     .then(data => {
// //       // console.log(data)
// //       setUserDataPerformance(data);
// //     })
// //  }, [])


//   // setUrl('http://localhost:3000/user/12/performance');

//   // const [user, setUser ] = useState({});
  
//   // useEffect(() => {
//   //   const apiUrl = "http://localhost:3000/user/12"
//   //   axios.get(apiUrl).then((repos) => {
//   //     const user = repos.data;
//   //     console.log(user.data.userInfos)
//   //   })
//   // })

//   // useEffect( async() => {
//   //   const fetchData = async() => {
//   //     const userUrl = await axios(
//   //       "http://localhost:3000/user/12/performance",
//   //     )
//   //     const userData = userUrl.data.data.userInfos;
//   //     setUser(userData);
//   //   }

//   //   fetchData();
//   //   console.log(user)
//   // }, [])


  // return (
  //   <div className="app">
  //     <Header></Header>
  //     {data.emptyData === false
  //       ?
  //       <section className='body-section'>
  //         <SideMenu></SideMenu>
  //         <div className="body-container">
  //           <BodyHeader></BodyHeader>
  //           <Charts
  //             goal = {data.goalIsLoading ? data.goal : 'no data'}
  //           ></Charts>
  //         </div>
  //       </section>
  //       :
  //       <h1>No Data Available</h1>
  //     }
  //   </div>
  // );
// }

// export default App;


// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       emptyData: false,
//       goal: null,
//       goalIsLoading: false
//     }
//   }

//   async componentDidCatch() {
//     await dataFetch(12).then(data => {
//       if (Object.keys(data).length === 0) {
//         console.error('Error while fetching API')
//         this.setState({emptyData: true})
//       } else {
//         this.setState({emptyData: false})
//       }
//     })
//     if (this.state.emptyData === false) {
//       dataFetch(12).then(data => {
//         this.setState({
//           emptyData: false,
//           goal: data.todayScore,
//           goaIsLoading: true
//         })
//       })
//     }
//   }


//   render() {
//     return (
      // <div className="app">
      //   <Header></Header>
      //   {this.state.emptyData === false
      //     ?
      //     <section className='body-section'>
      //       <SideMenu></SideMenu>
      //       <div className="body-container">
      //         <BodyHeader></BodyHeader>
      //         <Charts
      //           goal = {this.state.goalIsLoading ? this.state.goal : 'no data'}
      //         ></Charts>
      //       </div>
      //     </section>
      //     :
      //     <h1>No Data Available</h1>
      //   }
      // </div>
//     );
//   }

// }


// export default App



const App = () => {

  const [state, setState] = useState({
    firstName: null,
    score: null,
    calories: null,
    proteins: null,
    carbohydrate: null,
    fat: null
  })

  useEffect(() => {

    const getUrl = (id, option) => {
      let url = option ? `http://localhost:3000/user/${id}/${option}` : `http://localhost:3000/user/${id}`
      console.log(url)
      return url
    }
    // let url = 'http://localhost:3000/user/12'

    const fetchData = async () => {
      try {
        const response = await fetch(getUrl(12));
        const json = await response.json();

        const getScore = () => {
          if(json.data.todayScore) {
            return json.data.todayScore
          } else if (json.data.score) {
            return json.data.score
          }
        }
        setState({
          score: getScore(),
          firstName: json.data.userInfos.firstName,
          calories: json.data.keyData.calorieCount,
          proteins: json.data.keyData.proteinCount,
          carbohydrate: json.data.keyData.carbohydrateCount,
          fat: json.data.keyData.lipidCount
        })
        console.log(state.firstName)
      } catch (error) {
        console.log('error', error);
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
              ></Charts>
            </div>
          </section>
      </div>
  )
}

export default App