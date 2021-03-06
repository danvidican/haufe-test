'use strict';

require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./utils/jwt.js');
const errorHandler = require('./utils/errorHandler.js');
const healthCheck = require('./utils/healthCheck.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", healthCheck)
app.use(jwt());

app.use('/users', require('./user_management/user_controller.js'));

app.use(errorHandler);

const port = 8080;
const host = '0.0.0.0';

app.listen(port, host, function () {
    console.log('Server listening on port ' + port);
});