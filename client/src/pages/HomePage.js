import React, { useState, useEffect } from 'react'
import ProfileInfo from '../components/ProfileInfo'
import QuickFacts from '../components/QuickFacts'
import Badges from '../components/Badges'
import Languages from '../components/Languages'
import Leaderboard from '../components/Leaderboard'
import Navbar from '../components/Navbar'
import '../styling/home-page.css'


const HomePage = ({ userData: propUserData, userRepos: propUserRepos }) => {
  const [userData, setUserData] = useState({})
  const [userRepos, setUserRepos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData();
        if (userData?.login) {
          await getRepoData(userData.login);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors appropriately
      }
    };

    fetchData();
  }, []);

  const getUserData = async () => {
    const response = await fetch("http://localhost:4000/getUserData", {
      method: "GET",
      headers: { "Authorization": "Bearer " + localStorage.getItem("accessToken") }
    });

    if (!response.ok) throw new Error('Failed to fetch user data');
    const data = await response.json();
    setUserData(data);
    return data;
  }

  const getRepoData = async (username) => {
    const response = await fetch(`http://localhost:4000/getRepoData?username=${username}`, {
      method: "GET",
      headers: { "Authorization": "Bearer " + localStorage.getItem("accessToken") }
    });

    if (!response.ok) throw new Error('Failed to fetch repository data');
    const data = await response.json();
    setUserRepos(data);
  }

  return (
    <div className='main-container'>
      <div className='top-left'>
        <ProfileInfo userData={userData} propUserData={propUserData} />
      </div>
      <div className='top-right'>
        <QuickFacts userRepos={userRepos}/>
        <Badges />
      </div>
      <div className='bottom-left'>
        <Languages userRepos={userRepos} />
      </div>
      <div className='bottom-right'>
        <Leaderboard />
      </div>
    </div>
  )
}

export default HomePage;
