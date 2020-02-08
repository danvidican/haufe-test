const express = require('express');
const router = express.Router();
const _ = require('lodash');

const userService = require('./user_service');

// routes
router.post('/login', authenticate);
router.post('/register', register);
router.post('/testRole', isInternalMiddleWare, testRole);

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.header('x-auth-header', user.token).send(_.pick(user, ['username', 'role']))
            : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function testRole(req, res, next) {
    userService.testRole(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}



function isInternalMiddleWare(req, res, next) {
    return userService.isInternalMiddleWare(req)
        .then((u) =>  next())
        .catch(err => next(err))
}

module.exports = router;
