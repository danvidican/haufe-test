const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('utils/mongodb');
const { PermissionError, UnauthorizedError } = require('../utils/errors.js');
const User = db.User;


async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    } else {
        throw new UnauthorizedError("Wrong username or password");
    }
}

async function create(userParam) {
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }
    const user = new User(userParam);
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }
    if (user.role) {
        user.role = userParam.role
    } else {
        const { role } = config
        user.role = role.internal
    }
    await user.save();
}

async function testRole(userParam) {
    const user = await User.findOne({ username: userParam.username });
}

async function isInternalMiddleWare(req) {
    const userParam = req.body;
    const user = await User.findOne({ username: userParam.username });
    if (user) {
        const token = req.header('x-auth-token');
        const decoded = jwt.verify(token, config.secret);
        const { role } = config
        if (decoded.role !== role.internal) {
            throw new PermissionError("You are not allowed!");
        }
    }
    return user;
}


module.exports = {
    authenticate,
    create,
    testRole,
    isInternalMiddleWare
};
