'use strict';

var express = require('express')
var fansCtrl = require('../controllers/connectfans.controller')

var router = express.Router(); // eslint-disable-line new-cap

router.route('/saybyname/:toFansName')
  /** POST /api/saybyname/:toFansName - 根据粉丝姓名找到粉丝并进行聊天 */
  .post(fansCtrl.saybyname);
router.param('toFansName', fansCtrl.loadbyname);
module.exports = router
