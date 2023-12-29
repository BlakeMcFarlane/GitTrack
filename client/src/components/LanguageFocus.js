import React from 'react';
import '../styling/language-focus.css';
import { ReactComponent as GitHubLogo } from '../assets/github.svg'

const LanguageFocus = ({ language, languageRatio, repos }) => {

    const MAX_LENGTH_FOR_LARGE_FONT = 12; // Set your threshold
    const largeFontSize = '14px'; // Larger font size
    const smallFontSize = '1px'; // Smaller font size


    return (
        <div className='lang-container'>
            <div className='header'>
                <h1>{language}</h1>
                <div className='ratio-container'>
                    <div className='ratio'>
                        <p>{languageRatio}</p><h2>%</h2>
                    </div>
                </div>
            </div>
            <div className='lang-body'>

            </div>
            <div className='repos'>
                <div className='repo'>
                    <p>top repo</p>
                    <div className='top-repo'>
                        {repos && repos.length > 0 ? (
                            repos.map((repo, index) => {
                                // Determine the font size for each repo name
                                const fontSize = repo.name.length <= MAX_LENGTH_FOR_LARGE_FONT ? largeFontSize : smallFontSize;
                                return (
                                    <a href={`//github.com/${repo.full_name}`} key={index}>
                                        <div className='repo-item' style={{ fontSize: fontSize }}>
                                            <GitHubLogo className='git-logo'/>
                                            <p>{repo ? repo.name : 'No Name'}</p>
                                        </div>
                                    </a>
                                );
                            })
                        ) : (
                            <p>No repositories to display.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageFocus;
