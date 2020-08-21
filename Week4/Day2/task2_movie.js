/**
 * Movie Basics
 */

class Movie {
    constructor(title, studio, rating = 'PG') {
        this.title = title
        this.studio = studio
        this.rating = rating
    }
    getPG(items) { // returns the array of movies having rating PG
        let pg_movies = items.filter(movie => movie.rating === 'PG')
        return pg_movies
    }
}
movie_obj = new Movie('Casino Royale', 'Eon Prod', 'PG13') // creating a object
movie_list = [movie_obj, new Movie('Bahubali', 'Dharma Prod','PG'), new Movie('Maghdheera', 'South Movie', 'PG'), new Movie('WAR', 'YRF Films', 'R')]
console.log("Movies with PG ratings :\n",movie_obj.getPG(movie_list))