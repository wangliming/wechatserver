var uploadfansinfo = require('./../server/helpers/fansdbconnect')
var fansemitter = require('./../server/helpers/fansemitter')
var testdata = require('./testdata')
uploadfansinfo.uploadfans(testdata);
// uploadfansinfo.loadfans();