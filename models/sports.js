const Sport = require('./sport');

class Sports {

    constructor(){
        this.sports = [];
    }
    
    addSport(sport = new Sport()){
        this.sports.push(sport);
    }

    getSports(){
        return this.sports;
    }

    deleteSport(id = ''){
        this.sports = this.sports.filter(sport => sport.id !== id);
        return this.sports;
    }

    voteSport(id=''){
        this.sports = this.sports.map(sport => {
            if(sport.id === id){
                sport.votes++;
                return sport;
            }

            return sport;
        })
    }
}

module.exports = Sports;