import React from 'react';
import Navbar from '../components/Navbar';
import HomePage from './HomePage';
import { useState, useEffect } from 'react'

const UserPageWrapper = (props) => {

    const [userData, setUserData] = useState(null);         // JSON     {}
    const [userRepos, setUserRepos] = useState(null);       // Array    []


    const handleSearch = async (username) => {
        try {
            const userResponse = await fetch(`https://api.github.com/users/${username}`);
            const userData = await userResponse.json();
            setUserData(userData);
            console.log(userData)

            const response = await fetch(`http://localhost:4000/getRepoData?username=${username}`, {
                method: "GET",
                headers: { "Authorization": "Bearer " + localStorage.getItem("accessToken") }
            });

            if (!response.ok) 
                throw new Error('Failed to fetch repository data');
            const data = await response.json();
            setUserRepos(data);
            
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    };
    return (
        <div>
            <Navbar onSearch={ handleSearch }/>
            <HomePage searchUserData={ userData } searchUserRepos={ userRepos } />
        </div>
    );
    };

export default UserPageWrapper;
