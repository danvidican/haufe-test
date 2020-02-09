const express  = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/healthcheck', function (req, res, next) {
    if( mongoose.connection.readyState === 1){
        res.json({ server: 'UP', mongoDb: "UP" });
    } else {
        res.status(500).json({ message: 'Internal server error' });
    }
    return next();
});

module.exports = router
