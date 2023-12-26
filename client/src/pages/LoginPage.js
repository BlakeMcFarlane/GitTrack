import React from 'react'
import '../styling/login-page.css'
import { ReactComponent as GitHubLogo } from '../assets/github.svg'

const CLIENT_ID = "aab216eddd2d26ddfc43"


const LoginPage = () => {

    function loginWithGithub() {
        window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID)
    }

    return (
        <div className='login-container'>
            <div className='login-box'>
                <div className='login-content'>
                    <h3>welcome to</h3>
                    <div className='login-label'>
                        <h1 className='login-label-1'>Git</h1><h1 className='login-label-2'>Track</h1>
                    </div>
                    <div className='logo'>

                    </div>

                </div>
                <button className='login-button' onClick={loginWithGithub}>
                    <GitHubLogo className='git-logo'/>
                    <p>Sign in with GitHub</p>
                </button>
            </div>
        </div>

    )
}

export default LoginPage