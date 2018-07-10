const Express = require('express');
const controller = require('./weather.controller.js');
const asyncWrapper = require('../../asyncWrapper.helper');
const router = Express.Router();

router.get('/', asyncWrapper(controller.getList));

module.exports = router;
