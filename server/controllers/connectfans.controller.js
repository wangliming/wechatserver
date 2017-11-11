var events = require("events");
var  emitter = new events.EventEmitter();

function saybyname(req, res, next, id){
  console.log(req);
  emitter.emit("saybyname", req.body);
}
exports.default = { loadbyname: loadbyname};
module.exports = exports['default'];