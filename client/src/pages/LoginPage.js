import React from 'react'
import '../styling/login-page.css'
import { ReactComponent as GitHubLogo } from '../assets/github.svg'


// GitHub OAuth client ID
const CLIENT_ID = "aab216eddd2d26ddfc43"


// LoginPage component definition
const LoginPage = () => {

    // Function to handle login with GitHub
    function loginWithGithub() {
        // Redirects to GitHub's OAuth login page using the client ID
        window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID)
    }


     // Render method
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

// Exporting component for use in other parts of the app
export default LoginPage