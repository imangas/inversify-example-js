const container = require("./config");
const getAdmin = require("./app/getAdmin");

var routeGetUser = container.get('getUser');
routeGetUser.find();

var route = new getAdmin();
route.find()

console.log("-----------");