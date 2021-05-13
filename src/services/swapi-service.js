
export default class SwapiService {
    #apiBase = 'https://swapi.dev/api';

    async getResource (url) {
        const res = await fetch(`${this.#apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch: ${url}, received ${res.status}`)
        }

        const body = await res.json();
        return body;
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`)
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    async getAllPlanetsCount() {
        const res = await this.getResource(`/planets/`);
        return res.count;
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`)
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}/`)
    }
}
/*
const swapi = new SwapiService();

swapi.getAllPeople().then( (p) => {
    p.forEach( (i) => {
        console.log(i.name)
    })
});

swapi.getPerson(3).then( (p) => {
    console.log(p.name)
});

swapi.getAllPlanets().then( (p) => {
    p.forEach( (i) => {
        console.log(i.name)
    })
});

swapi.getPlanet(3).then( (p) => {
    console.log(p.name)
});

swapi.getAllStarships().then( (p) => {
    p.forEach( (i) => {
        console.log(i.name)
    })
});

swapi.getStarship(3).then( (p) => {
    console.log(p.name)
});*/

/*getResource('https://swapi.dev/api/people/1_')
    .then( (body) => {
        console.log(body);
    })
    .catch( (err) => {
        console.log('catch error:', err)
    })*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
