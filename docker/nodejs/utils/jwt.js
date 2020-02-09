const expressJwt = require('express-jwt');
const config = require("config.json");


const getTokenFromHeader = (req) => {
    return req.header('x-auth-token');
}

const jwt = () => {
    const { secret } = config;
    return expressJwt({
        secret: secret,
        getToken: getTokenFromHeader,
    }).unless({
        path: [
            '/users/login',
            '/users/register',
            '/healthcheck',
        ]
    });
}



module.exports = jwt;
