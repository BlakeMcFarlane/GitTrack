import React from 'react'
import '../styling/languages.css'
import { useState, useEffect } from 'react'


const Languages = ({ userRepos }) => {
    const [topLanguages, setTopLanguages] = useState([]);
    const colors = ['#FF6666', '#63618E', '#FFA500', '#20B2AA', '#FFD700', '#D3FFCE', '#F633FF', '#FF8833', '#33FF88', '#8833FF'];


    useEffect(() => {
        if (!userRepos) 
            return; // Add a check to ensure userRepos is defined

        const languageCount = {};
        let totalSize = 0;

        userRepos.forEach(repo => {
            Object.keys(repo.languages).forEach(language => {
                const languageValue = repo.languages[language]
                languageCount[language] = (languageCount[language] || 0) + languageValue;
                totalSize += languageValue;
            });
        });

        const languagePercentages = Object.fromEntries(
            Object.entries(languageCount).map(([language, count]) => [language, (count / totalSize) * 100])
        );
    
        setTopLanguages(Object.entries(languagePercentages).sort((a, b) => b[1] - a[1]));

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
                            {topLanguages.map(([language, _percentage], index) => (
                                <li key={index} className='language-item'>
                                    <div className='language-color' style={{ 
                                        backgroundColor: colors[index % colors.length],
                                    }}></div>
                                    <span className='language-name'>{language}</span>
                                </li>

                            ))}
                        </ol>
                    </div>

                </div>
                <div className='language-focus'>
                    <div className='focus'>

                    </div>
                </div>
            </div>
            <div className='language-bar-container'>
                <div className='language-bar'>
                    {topLanguages.map(([language, percentage], index) => (
                        <div 
                            key={index} 
                            className='language-bar-item' 
                            style={{ 
                                width: `${percentage}%`, 
                                backgroundColor: colors[index % colors.length]
                            }}
                        >
                        <span className='language-label'> {percentage.toFixed(2)}%</span>
                        </div>
                    
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Languages