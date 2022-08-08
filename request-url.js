const request = require('request');
request('https://swapi.dev/api/people/1/', function (errorPeople, responsePeople, bodyPeople) {
    if (!errorPeople) {
        const luke = JSON.parse(bodyPeople);
        request(luke.films[0], function (errorFilm, responseFilm, bodyFilm) {
            if (!errorFilm) {
                const film = JSON.parse(bodyFilm);
                console.log(film.title);
            }
        });
    }
});