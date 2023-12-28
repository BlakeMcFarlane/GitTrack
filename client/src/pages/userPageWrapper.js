import React from 'react';
import Navbar from '../components/Navbar';
import HomePage from './HomePage';
import { useState, useEffect } from 'react'

const UserPageWrapper = (props) => {

    const [userData, setUserData] = useState(null);
    const [userRepos, setUserRepos] = useState(null);


    const handleSearch = async (username) => {
        try {
            const userResponse = await fetch(`https://api.github.com/users/${username}`);
            const userData = await userResponse.json();
            setUserData(userData);
            console.log(userData)

            const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
            const reposData = await reposResponse.json();
            setUserRepos(reposData);
            
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    };
    return (
        <div>
        <Navbar onSearch={handleSearch}/>
        <HomePage propUserData={ userData } propUserRepos={ userRepos } />
        </div>
    );
    };

export default UserPageWrapper;
