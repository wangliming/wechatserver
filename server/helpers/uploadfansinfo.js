var events = require("events");
var  emitter = new events.EventEmitter();

emitter.addListener("some_event",function(){
    console.log("事件触发，调用此回调函数");
});

// emitter.emit("some_event");
