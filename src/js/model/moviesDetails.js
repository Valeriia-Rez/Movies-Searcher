import axios from "axios";

export default class MoviesDetails {
    constructor() {
        this.result = null;
        this.key = "cf30bcc05df32683582a915d4d1985d9";

    }
    async getMoviesDetails(id) {
        try {
            const res = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}&language=en-US`);
            this.result = res.data;
            console.log(this.result);
        } catch (error) {
            alert("error");
        }
    }
}