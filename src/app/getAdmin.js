const container = require("../config");

class getAdmin {
    constructor() {
        console.log("getAdmin::Start");
        this.database = container.get('Database');
    }

    find(){
        this.database.exec('select * from users where role = "admin"')
    }
}

module.exports = getAdmin;