const config = require('config.json');
const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || config.connectionString,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../user_management/user_model.js')
};