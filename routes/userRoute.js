const express = require('express');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const router = express.Router();

// @route   POST api/register
// @desc    For submitting user data to database for register purposes.
// @access  Public
router.post('/register', 
[
    check('name', 'Please add Fullname.')
    .not().isEmpty(),
    check('email','Please include a valid email. ')
    .isEmail(),
    check('password', 'PLease enter a password with 6 or more characters.')
    .isLength({min: 6})
],
async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    const newUser = await user.save();

    if (newUser) {
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser),
        });
    } else {
        res.status(401).send({ message: 'Invalid User Data.' });
    }
});

// @route   POST api/signin
// @desc    For submitting user data to database for signing in purposes.
// @access  Public
router.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });
    if (signinUser) {
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser),
        });
    } else {
        res.status(401).send({ message: 'Invalid Email or Password.' });
    }
});

// @route   POST api/signin
// @desc    get admin
// @access  Private
router.get('/createadmin', async (req, res) => {
    try {

        const user = new User({
            name: 'Chad',
            email: 'chadhoosain@gmail.com',
            password: '1234',
            isAdmin: true,
        });

        const newUser = await user.save();
        res.send(newUser);

    } catch (error) {
        res.send({ message: error.message });
    }
});

module.exports = router;