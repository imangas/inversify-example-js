var inversify = require("inversify");
require("reflect-metadata");


class getUser {
    constructor(database) {
        console.log("getUser::Start");
        this.database = database;
    }

    find(){
        this.database.exec('select * from users where id = 1')
    }
}

inversify.decorate(inversify.injectable(), getUser);
inversify.decorate(inversify.inject('Database'), getUser, 0);
module.exports = getUser;