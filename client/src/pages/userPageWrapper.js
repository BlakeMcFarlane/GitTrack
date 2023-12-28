import React from 'react';
import Navbar from '../components/Navbar';
import HomePage from './HomePage';
import { useState, useEffect } from 'react'

const UserPageWrapper = (props) => {

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
        <div>
        <Navbar onSearch={handleSearch}/>
        <HomePage userData={ userData } userRepos={ userRepos } />
        </div>
    );
    };

export default UserPageWrapper;
