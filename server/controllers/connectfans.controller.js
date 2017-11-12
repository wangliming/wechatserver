var events = require("events");
var fansemitter = require('./../helpers/uploadfansinfo')

function saybyname(req, res, next, id){
  console.log(req);
  fansemitter.emit("saybyname", req.body);
}
exports.default = { saybyname: saybyname};
module.exports = exports['default'];