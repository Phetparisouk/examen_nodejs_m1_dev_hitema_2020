const fs = require('fs');
const HttpStatus = require('http-status-codes');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        // To be implemented!
        let target = this.peoples[id]
        if (target === null) {
            return HttpStatus.NOT_FOUND;
        }
        this.peoples[id] = people;
        return HttpStatus.OK;
    }
    
    getPeople(filters) {
        // To be implemented!

        const is_zero = 0;
        if (Object.entries(filters).length === is_zero){
            return this.peoples;
        }

        let filtered = []
        this.peoples.forEach(people => {
            for (const key in filters) {
                if (people[key] === filters[key]) {
                    filtered.push(people)
                }
            }
        });
        return filtered;
    }
}
