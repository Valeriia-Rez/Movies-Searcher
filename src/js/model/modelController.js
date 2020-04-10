import axios from "axios";

export default class Model {
    constructor() {
        this.result = null;

        this.key = "cf30bcc05df32683582a915d4d1985d9";
    }

    async getListMovies() {
        try {
            const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&language=en-US&page=1`);

            this.result = res.data.results;

            console.log(this.result);

        } catch (error) {
            alert("error");
        }
    }
}