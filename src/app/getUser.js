var inversify = require("inversify");
require("reflect-metadata");


class getUser {
    constructor(database, params) {
        console.log("getUser::Start");
        this.database = database;
        this.Logger = params[0];
        this.Auth = params[1];
    }

    find(){
        this.database.exec('select * from users where id = 1');
    }
}

inversify.decorate(inversify.injectable(), getUser);
inversify.decorate(inversify.inject('Database'), getUser, 0);
inversify.decorate(inversify.multiInject('BasicController'), getUser, 1);
module.exports = getUser;