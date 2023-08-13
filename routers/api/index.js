const express = require('express');
const router = express.Router();

const path = require('node:path');

const notification = require('./notification/index');

router.use('/notification', notification);

// const main = require('./main/index.js');
// const user = require('./users/index.js');
// const login = require('./login/index.js');
// const api = require('./api/index');

// router.use('/api', api);

// router.use('/', main);
// router.use('/user', user);
// router.use('/login', login);

module.exports = router;