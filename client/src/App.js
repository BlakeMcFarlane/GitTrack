import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import LoginPage from './pages/LoginPage.js'
import './styling/App.css';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import React, { useState } from 'react';


const App = () => {
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  const handleSearch = async (username) => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();
      setUserData(userData);

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await reposResponse.json();
      setUserRepos(reposData);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  return (
    <Router>
      <div className="container">
        <Navbar onSearch={handleSearch}/>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/user' element={<HomePage userData={userData} userRepos={userRepos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

