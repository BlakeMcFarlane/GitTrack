import React from 'react'
import ProfileInfo from '../components/ProfileInfo'
import '../styling/home-page.css'
import QuickFacts from '../components/QuickFacts'
import Badges from '../components/Badges'
import Languages from '../components/Languages'
import Leaderboard from '../components/Leaderboard'

const HomePage = () => {
  return (
    <div className='main-container'>
      <div className='top-left'>
        <ProfileInfo />
      </div>
      <div className='top-right'>
        <QuickFacts />
        <Badges />
      </div>
      <div className='bottom-left'>
        <Languages />
      </div>
      <div className='bottom-right'>
        <Leaderboard />
      </div>
    </div>
  )
}

export default HomePage