import axios from "axios";

export default class Images {
    constructor() {
        this.result = null;
        this.secure_url = null;
        this.poster_sizes = null;
        this.key = "cf30bcc05df32683582a915d4d1985d9";

    }

    async getImages() {
        const res = await axios(`https://api.themoviedb.org/3/configuration?api_key=${this.key}`);
        this.result = res.data.images;
        console.log(this.result);
        this.secure_url = this.result.secure_base_url;
        this.poster_sizes = this.result.poster_sizes[2];
    }
}