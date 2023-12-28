import React from 'react'
import '../styling/profile-info.css'

const ProfileInfo = ({ userData, propUserData }) => {




    return (
        <div className='profile-container'>
            <div className='profile-pic'>
                <img src={userData.avatar_url} />
            </div>
            <div className='info'>
                <div className='profile-name'>
                    <h1>{userData.login}</h1>
                </div>
                <div className='profile-stats'>
                    <div className='stat'>
                        <p>repositories</p>
                        <p id='value'>{userData.public_repos}</p>
                    </div>
                    <div className='stat'>
                        <p>friends</p>
                        <p id='value'>{userData.following}</p>
                    </div>
                    <div className='stat'>
                        <p>account Age</p>
                        <p id='value'>-</p>
                    </div>
                    <div className='stat'>
                        <p>bio</p>
                        <p id='value'>{userData.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo