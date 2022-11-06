const router = require('express').Router();

const password = require('./password');

router.use('/users', password);

module.exports = router;