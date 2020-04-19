import axios from "axios";

export default class Movies {
    constructor() {
        this.result = null;
        this.key = "cf30bcc05df32683582a915d4d1985d9";

    }

    async getListMovies(type) {
        try {
            const res = await axios(`https://api.themoviedb.org/3/movie/${type}?api_key=${this.key}&language=en-US&page=1`);

            this.result = {
                ...this.result,
                [type]: res.data.results
            }

            return this.result[type];

        } catch (error) {
            alert("error");
        }
    }
}