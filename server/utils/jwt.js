const expressJwt = require('express-jwt');
const config     = require("config.json");


const jwt = () => {
    const { secret } = config;
    return expressJwt({ secret }).unless({
        path: [
            '/users/register'
        ]
    });
}





module.exports = jwt;
