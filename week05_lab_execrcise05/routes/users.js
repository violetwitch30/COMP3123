const express = require('express');
const fs = require('fs');
const path = require('path');

const routerUser = express.Router();

// Load user data from user.json
const userPath = path.join(__dirname, '..', 'user.json');
const userData = JSON.parse(fs.readFileSync(userPath, 'utf-8'));

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req,res) => {
  res.json(userData);
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  password is valid then send response as below
    {
        status: true,
        message: "User is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If password is invalid then send response as below
    {
        status: false,
        message: "Password is invalid"
    }
*/

routerUser.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username !== userData.username) {
        return res.json({
            status: false,
            message: "User Name is invalid"
        });
    }

    if (password !== userData.password) {
        return res.json({
            status: false,
            message: "Password is invalid"
        });
    }

    return res.json({
        status: true,
        message: "User is valid"
    });
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout/:username', (req, res) => {
    const { username } = req.params;
    res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = routerUser;