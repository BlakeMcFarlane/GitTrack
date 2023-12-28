import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import LoginPage from './pages/LoginPage.js'
import './styling/App.css';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import React, { useState } from 'react'
import UserPageWrapper from "./pages/userPageWrapper.js";


const App = () => {

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/user' element={<UserPageWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

