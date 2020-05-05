const fs = require('fs');
//const HttpStatus = require('http-status-codes'); ne fonctionne pas, je ne sais pas pourquoi
//alternative a HttpStatus :
const NOT_FOUND = 404;
const OK = 200;

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        // To be implemented!
        let target = this.peoples[id]
        if (target === null) {
            return NOT_FOUND;
        }
        this.peoples[id] = people;
        return OK;
    }
    
    getPeople(/*filters*/) {
        // To be implemented!

        //const is_zero = 0;
        //if (Object.entries(filters).length === is_zero){
            return this.peoples;
        //}

        //FILTRE non reussi
        //let filtre = []
        //this.peoples.forEach(people => {
        //    for (const key in filters) {
        //        if (people[key] === filters[key]) {
        //            filtre.push(people)
        //        }
        //    }
        //});
        //return filtre;
    }
}
