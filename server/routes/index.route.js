var express = require('express')
var fansRoutes = require('./fans.route')

var router = express.Router(); // eslint-disable-line new-cap

// fans routes at /fans
router.use('/fans',fansRoutes );

module.exports = router