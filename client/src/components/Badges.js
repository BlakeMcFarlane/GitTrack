import React from 'react'
import '../styling/badges.css'
import { useEffect, useState } from 'react'

const Badges = ({ userData }) => {

  const [username, setUsername] = useState(userData.login)

  useEffect(() => {
    if (userData && userData.login) {
      setUsername(userData.login);
    }
  }, [userData]);
  

  return (
    <div className='badges-container'>
        <div className='badges-list'>
          <img src={`https://ghchart.rshah.org/666666/${username}`} alt="Name Your Github chart" className='chart' />
        </div>
    </div>
  )
}

export default Badges