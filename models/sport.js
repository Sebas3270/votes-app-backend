const { v4:uuid } = require('uuid');

class Sport {

    constructor(name = 'no-name', votes = 0){
        this.id = uuid();
        this.name = name;
        this.votes = votes;
    }

}

module.exports = Sport;