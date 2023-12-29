// Express is a backend Node framework for creating API's, creating a server and ways to communicate with your server.
var express = require('express')

// 
var cors = require('cors')
const fetch = (...args) => 
    import ('node-fetch').then(({default: fetch}) => fetch(...args))

var bodyParser = require('body-parser');


const CLIENT_ID = "aab216eddd2d26ddfc43"
const CLIENT_SECRET = "2a8b41295cceb3958c458b4934b9a9bc771a76ac"

var app = express()

app.use(cors());
app.use(bodyParser.json())

// Code being passed from the frontend
app.get('/getAccessToken', async function (req, res) {
    req.query.code;
    console.log("TOKEN: " + req.query.code)
    const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + req.query.code;

    await fetch("https://github.com/login/oauth/access_token" + params, {
        method: "POST",
        headers: {
            "Accept": "application/json"
        }
    }).then((response) => {
        console.log(response)
        return response.json();
    }).then((data) => {
        console.log(data)
        res.json(data);
    })
})


// getUserData
app.get('/getUserData', async function(req, res) {
    req.get("Authorization");
    await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
            "Authorization": req.get("Authorization")
        }
    }).then((response) => {
        return response.json()
    }).then((data) => {
        res.json(data)
        const username = data.login
    })
})



// getRepoData
app.get('/getRepoData', async function(req, res) {
    const username = req.query.username;
    const authHeader = req.get("Authorization");

    try {
        // Fetch repositories
        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
            method: "GET",
            headers: {
                "Authorization": authHeader
            }
        });

        let repos = await response.json();

        if (!Array.isArray(repos)) {
            console.error("Expected an array but got:", typeof repos);
            repos = [];  // Initialize as an empty array or handle the error as needed
        }

        // Fetch languages and commits for each repository
        const repoData = await Promise.all(repos.map(async (repo) => {
            const languagesUrl = `https://api.github.com/repos/${username}/${repo.name}/languages`;
            const commitsUrl = repo.commits_url.replace('{/sha}', '');

            const [languagesResponse, commitsResponse] = await Promise.all([
                fetch(languagesUrl, {
                    method: "GET",
                    headers: { "Authorization": authHeader }
                }),
                fetch(commitsUrl, {
                    method: "GET",
                    headers: { "Authorization": authHeader }
                })
            ]);

            const languages = await languagesResponse.json();
            const commits = await commitsResponse.json();

            return {
                ...repo,
                languages,
                totalCommits: commits.length
            };
        }));

        // Send combined data
        res.json(repoData);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching repository data');
    }
});


app.listen(4000, function () {
    console.log("cors running on port 4000")
})
