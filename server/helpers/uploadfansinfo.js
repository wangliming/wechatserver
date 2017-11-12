var events = require("events");
var fansemitter = new events.EventEmitter();

fansemitter.addListener("saybyname",function(){
    console.log("事件触发，调用此回调函数");
});
module.exports = fansemitter;
