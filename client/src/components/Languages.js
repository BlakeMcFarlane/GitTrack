import React from 'react'
import '../styling/languages.css'
import { useState, useEffect } from 'react'

const Languages = ( {userRepos } ) => {
    const [topLanguages, setTopLanguages] = useState([]);

    useEffect(() => {
        if (!userRepos) return; // Add a check to ensure userRepos is defined

        const languageCount = {};

        userRepos.forEach(repo => {
            Object.keys(repo.languages).forEach(language => {
                languageCount[language] = (languageCount[language] || 0) + 1;
            });
        });

        const sortedLanguages = Object.entries(languageCount)
                                       .sort((a, b) => b[1] - a[1])
                                       .map(entry => entry[0])
                                       .slice(0, 5); // Get top 5 languages

        setTopLanguages(sortedLanguages);
    }, [userRepos]);

    return (
        <div className='language-container'>
            <div className='languages'>
                <div className='language-list'>
                    <div className='label'>
                        <h1>LANGUAGES</h1>
                    </div>
                    <div className='list'>
                        <ol className='language'>
                            {topLanguages.map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className='language-focus'>
                    <div className='focus'>

                    </div>
                </div>
            </div>
            <div className='language-bar'>
                <div className='bar'>

                </div>
            </div>
        </div>
    )
}

export default Languages