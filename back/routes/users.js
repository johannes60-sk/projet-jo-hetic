const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/users');
const { token } = require('morgan');

function generateToken(user) {
    return jwt.sign({ email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' });
}

router.post('/register', (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.email) {
        return res.json({ result: false, error: 'Invalid input' });
    } else {
        User.findOne({ email: req.body.email }).then((data) => {
            if (data === null) {
                const jwt = generateToken({ email: req.body.email });
                const newUser = new User({
                    username: req.body.username,
                    password: bcrypt.hashSync(req.body.password, 10),
                    email: req.body.email,
                    jwt: jwt,
                });
    
                newUser.save().then((newDoc) => {
                    res.json({ result: true, user: newDoc, token: jwt});
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
                    const jwt = generateToken({ email: req.body.email });
                    User.findOneAndUpdate({ email: req.body.email })
                        .then((data) => { res.json({ result: true, user: data, token: jwt }) });
                } else {
                    res.json({ result: false, error: 'Wrong password' });
                }
                // isPasswordValid ? res.json({ result: true, user: data }) : res.json({ result: false, error: 'Wrong password' });
            }
        })
    }
});

router.get('/verify', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.json({ result: false, error: 'No token provided' });
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.json({ result: false, error: 'Invalid token' });
            } else {
                User.findOne({ email: decoded.email }).then((data) => {
                    if (data === null) {
                        res.json({ result: false, error: 'User not found' });
                    } else {
                        res.json({ result: true });
                    }
                });
            }
        });
    }
});

module.exports = router;
