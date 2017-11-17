var events = require("events");
var fansemitter = require('./../helpers/fansemitter')
var httphelper = require('./../helpers/httphelper')
// 从web客户端向虚拟机粉丝端发消息
function fromsaybyname(req, res, next, id){
  // console.log(req);
  fansemitter.emit("fromsaybyname", req.body);
}
function fromchatinroom(req, res, next, id){
  // 在群里聊天
  fansemitter.emit("fromchatinroom", req.body);
}
// 虚拟机粉丝端向web客户端向发消息
fansemitter.addListener('tosaybyname', async param => {
  // 发送http请求--wechaty请求

})
fansemitter.addListener('tochatinroom', async param => {
  // wechat请求
})

exports.default = { fromsaybyname: fromsaybyname, fromchatinroom: fromchatinroom, tosaybyname: tosaybyname, tochatinroom: tochatinroom};
module.exports = exports['default'];