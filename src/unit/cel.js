class cel {

    constructor(config, info) {
        this.config = config;
        this.info = info;
    }


    consoleInfo() {
        console.log(this.getInfo())
        console.log(this.config)
    }

    getInfo() {
        return this.info;
    }

}

export default cel;