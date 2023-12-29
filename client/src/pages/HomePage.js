import React, { useState, useEffect } from 'react'
import ProfileInfo from '../components/ProfileInfo'
import QuickFacts from '../components/QuickFacts'
import Badges from '../components/Badges'
import Languages from '../components/Languages'
import Leaderboard from '../components/Leaderboard'
import '../styling/home-page.css'


const HomePage = ({ searchUserData, searchUserRepos }) => {
  const [rerender, setRerender] = useState(false)
  const [userData, setUserData] = useState({})
  const [userRepos, setUserRepos] = useState([])

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const codeParam = urlParams.get('code')
    console.log("code: ", codeParam)

    if (codeParam && (localStorage.getItem("accessToken") === null)){
      async function getAccessToken() {
        await fetch("http://localhost:4000/getAccessToken?code=" + codeParam, {
          method:"GET"
        }).then((response) => {
          return response.json()
        }).then((data) => {
          console.log(data);
          if(data.access_token) {
            localStorage.setItem("accessToken", data.access_token)
            setRerender(!rerender)
          }
        })
      }
      getAccessToken()
    }
    
    const fetchData = async () => {
      try {
        const userData = await getUserData();
        if (userData.login) {
          await getRepoData(userData.login)
  
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  const getUserData = async () => {
    const response = await fetch("http://localhost:4000/getUserData", {
      method: "GET",
      headers: { "Authorization": "Bearer " + localStorage.getItem("accessToken") }
    });

    if (!response.ok) 
      throw new Error('Failed to fetch user data');

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
        { searchUserData ? (
          <ProfileInfo userData={ searchUserData } />
        ) : (
          <ProfileInfo userData={ userData } />
        )}
      </div>
      <div className='top-right'>
        { searchUserRepos ? (
          <QuickFacts userRepos={ searchUserRepos }/>
        ) : (
          <QuickFacts userRepos={ userRepos }/>
        )}
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
