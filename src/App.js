import React from 'react'
import './App.scss';

import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom";
import Header from './components/Header/header'
import Homepage from './Pages/Homepage';
import UserPage from './Pages/UserPage';
import Errorpage from './Pages/Errorpage'


const App = () => {


  return (
    <Router>
      <div className="app">
        <Header></Header>
          <Routes>
          <Route index element={<Homepage/>} />
          <Route path="/user/:userid" element={<UserPage/>} />
          <Route path="/404" element={<Errorpage/>} />
          <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App