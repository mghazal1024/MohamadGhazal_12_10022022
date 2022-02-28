import React, {useEffect, useState} from 'react'
import './App.scss';
import axios from 'axios';
import BodyHeader from './components/BodyHeader/bodyHeader';
import Charts from './components/Charts/charts';

import Header from './components/Header/header'
import SideMenu from './components/SideMenu/sideMenu';

function App() {

  // const [user, setUser ] = useState({});
  
  // useEffect(() => {
  //   const apiUrl = "http://localhost:3000/user/12"
  //   axios.get(apiUrl).then((repos) => {
  //     const user = repos.data;
  //     console.log(user.data.userInfos)
  //   })
  // })

  // useEffect( async() => {
  //   const fetchData = async() => {
  //     const userUrl = await axios(
  //       "http://localhost:3000/user/12",
  //     )
  //     const userData = userUrl.data.data.userInfos;
  //     setUser(userData);
  //   }

  //   fetchData();
  //   console.log(user)
  // }, [])

  return (
    <div className="app">
      <Header></Header>
      <section className='body-section'>
        <SideMenu></SideMenu>
        <div className="body-container">
          <BodyHeader></BodyHeader>
          <Charts></Charts>
        </div>
      </section>
    </div>
  );
}

export default App;
