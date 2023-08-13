const express = require('express');
const router = express.Router();
const controller = require('./notification.controller');

/* GET home page. */
router.get('/', controller.get);
// router.all('*', controller.all);

module.exports = router;