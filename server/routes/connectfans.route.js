'use strict';

var express = require('express')
var fansCtrl = require('../controllers/connectfans.controller')

var router = express.Router(); // eslint-disable-line new-cap

router.route('/fromsaybyname/')
  /** POST /api/saybyname/:toFansName - 根据粉丝姓名找到粉丝并进行聊天（从web客户端向粉丝端） */
  .post(fansCtrl.fromsaybyname);
// 建群聊天
// 在群里聊天
// 从群里踢人
// 删除联系人
router.param('/tosaybyname/', fansCtrl.tosaybyname);
module.exports = router
