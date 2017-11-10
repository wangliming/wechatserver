'use strict';

var express = require('express')
var fansCtrl = require('../controllers/fans.controller')

var router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/fans - Get list of fans */
  .get(fansCtrl.list);
router.route('/getbyid/:fansId')
    .get(fansCtrl.get);
router.route('/:wholeFansName')
  /** GET /api/fans/:fansId - Get fans */
  .get(fansCtrl.get);
router.route('/searchbyname/:vagueFansName')
    .get(fansCtrl.get);
router.route('/add/')
    .post(fansCtrl.create);
router.route('/update/:wholeFansName')
    .post(fansCtrl.update);
/** Load user when API with userId route parameter is hit */
router.param('wholeFansName', fansCtrl.load);
router.param('vagueFansName', fansCtrl.loadbyname);
router.param('fansId', fansCtrl.loadbyid);
module.exports = router