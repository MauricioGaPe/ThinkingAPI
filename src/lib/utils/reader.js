const fs = require("fs");

class Reader{
    static readJsonFile(path){
        try {
            const rawdata = fs.readFileSync(path);
            return JSON.parse(rawdata);
        } catch (error) {
            return "error";
        }
    }
}

module.exports = Reader;