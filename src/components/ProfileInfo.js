import React from 'react'
import '../styling/profile-info.css'

const ProfileInfo = () => {
  return (
    <div className='profile-container'>
        <div className='profile-pic'>
            <h5>profile picture</h5>
        </div>
        <div className='info'>
            <div className='profile-name'>
                <h1>username</h1>
            </div>
            <div className='profile-stats'>
                <div className='stat'>
                    <p>Repositories</p>
                    <p id='value'>#</p>
                </div>
                <div className='stat'>
                    <p>Friends</p>
                    <p id='value'>#</p>
                </div>
                <div className='stat'>
                    <p>Account Age</p>
                    <p id='value'>#</p>
                </div>
                <div className='stat'>
                    <p>Bio</p>
                    <p id='value'>#</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileInfo