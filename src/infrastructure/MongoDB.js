class MongoDB{
    constructor(config) {
        console.log("MongoDB::Start");
        this.config = config;
        this.connect();
    }

    connect() {
        console.log(`MongoDB::Config:user:${this.config.user}`)
        console.log(`MongoDB::Config:pass:${this.config.pass}`)
    }

    exec(query){
        console.log(`MongoDB::exec::${query}`);
    }
}

module.exports = MongoDB;