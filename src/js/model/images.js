import axios from "axios";

export default class Images {
    constructor() {
        this.result = null;
        this.secure_url = null;
        this.poster_sizes = null;
        this.key = "cf30bcc05df32683582a915d4d1985d9";

    }

    async getImages() {
        try {
            const res = await axios(`https://api.themoviedb.org/3/configuration?api_key=${this.key}`);
            this.result = res.data.images;
            this.secure_url = this.result.secure_base_url;
            this.poster_sizes = this.result.poster_sizes;
        } catch (error) {
            alert("error");
        }

    }
}