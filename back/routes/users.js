const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/users');

function generateToken(user) {
    return jwt.sign({ email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '60s' });
}

router.post('/register', (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.email) {
        return res.json({ result: false, error: 'Invalid input' });
    } else {
        User.findOne({ email: req.body.email }).then((data) => {
            if (data === null) {
                const newUser = new User({
                    username: req.body.username,
                    password: bcrypt.hashSync(req.body.password, 10),
                    email: req.body.email,
                    jwt: generateToken({ email: req.body.email }),
                });
    
                newUser.save().then((newDoc) => {
                    res.json({ result: true, user: newDoc });
                });
            } else {
                res.json({ result: false, error: 'Email already registered' });
            }
        })
    }
});

router.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.json({ result: false, error: 'Invalid input' });
    } else {
        User.findOne({ email: req.body.email }).then((data) => {
            if (data === null) {
                res.json({ result: false, error: 'Invalid credentials' });
            } else {
                const isPasswordValid = bcrypt.compareSync(req.body.password, data.password);
                if (isPasswordValid) {
                    // res.json({ result: true, user: data });
                    User.findOneAndUpdate({ email: req.body.email }, { jwt: generateToken({ email: req.body.email }) })
                        .then((data) => { res.json({ result: true, user: data }) });
                } else {
                    res.json({ result: false, error: 'Wrong password' });
                }
                // isPasswordValid ? res.json({ result: true, user: data }) : res.json({ result: false, error: 'Wrong password' });
            }
        })
    }
});

module.exports = router;
