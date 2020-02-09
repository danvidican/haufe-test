const express = require('express');
const router = express.Router();
const _ = require('lodash');

const userService = require('./user_service');
// routes
router.post('/login', authenticate);
router.post('/register', register);
router.get('/', internalUserVerification, getAllUsers);
router.post('/delete/:id', internalUserVerification, deleteUser);

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAllUsers(req, res, next) {
    userService.getAllUsers(req.body)
        .then((users) => res.json({users}))
        .catch(err => next(err));
}

function deleteUser(req, res, next) {
    userService.deleteUser(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}



function internalUserVerification(req, res, next) {
    return userService.isInternalMiddleWare(req)
        .then((u) =>  next())
        .catch(err => next(err))
}

module.exports = router;
