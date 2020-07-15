var inversify = require("inversify");
require("reflect-metadata");
const getUser = require("./app/getUser");
const MySQL = require("./infrastructure/MySQL");
const MongoDB = require("./infrastructure/MongoDB");

var TYPES = {
    getUser: "getUser",
    Database: "Database",
    mysqlConfig: "mysqlConfig",
    MongoDB: "MongoDB"
};

const config = {
    host: 'localhost',
    user: 'IronMan',
    pass: '123'
};

inversify.decorate(inversify.injectable(), MySQL);
inversify.decorate(inversify.inject(TYPES.mysqlConfig), MySQL, 0);

inversify.decorate(inversify.injectable(), MongoDB);
inversify.decorate(inversify.inject(TYPES.MongoDB), MongoDB, 0);

var container = new inversify.Container();
container.bind(TYPES.getUser).to(getUser);
container.bind(TYPES.Database).to(MySQL);
container.bind(TYPES.MongoDB).to(MongoDB);
container.bind(TYPES.mysqlConfig).toConstantValue(config);

module.exports = container;