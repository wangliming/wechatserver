var express = require('express')
var fansRoutes = require('./connectfans.route')

var router = express.Router(); // eslint-disable-line new-cap

// fans routes at /fans
router.use( '/connectfans',fansRoutes );

module.exports = router