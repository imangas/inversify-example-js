class MySQL{
    constructor(config) {
        console.log("MySQL::Start");
        this.config = config;
        this.connect();
    }

    connect() {
        console.log(`MySQL::Config:user:${this.config.user}`)
        console.log(`MySQL::Config:pass:${this.config.pass}`)
    }

    exec(query){
        console.log(`MySQL::exec::${query}`);
    }
}

module.exports = MySQL;