import React, { useState, useEffect } from 'react';
import '../styling/quick-facts.css';


const QuickFacts = ({ userRepos }) => {
    const [totalCommits, setTotalCommits] = useState(0);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        let total = 0;
        let allLanguages = new Set();

        userRepos.forEach(repo => {
            total += repo.totalCommits;  
            Object.keys(repo.languages || {}).forEach(language => {
                allLanguages.add(language);  
            });
        });

        setTotalCommits(total);
        setLanguages([...allLanguages]); 
    }, [userRepos]);



    return (
        <div className='facts-container'>
            <div className='fact-box'>
                <h1>
                    { totalCommits }
                </h1>
                <p>commits</p>
            </div>
            <div className='fact-box'>
                <h1>
                    #
                </h1>
                <p>lines</p>
            </div>
            <div className='fact-box'>
                <h1>
                    {languages.length}
                </h1>
                <p>languages</p>
            </div>
            <div className='fact-box'>
                <h1>
                    #
                </h1>
                <p>rank</p>
            </div>
        </div>
    )
}

export default QuickFacts