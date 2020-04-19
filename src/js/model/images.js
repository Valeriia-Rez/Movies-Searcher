import axios from "axios";

export default class Images {
    constructor() {
        this.result = null;
        this.key = "cf30bcc05df32683582a915d4d1985d9";
    }

    async getImages() {
        console.log("jj")
        try {
            const res = await axios(`https://api.themoviedb.org/3/configuration?api_key=${this.key}`);
            console.log(res);
            this.result = {
                result: res.data.images,
                secure_url: res.data.images.secure_base_url,
                poster_sizes: res.data.images.poster_sizes
            };
            return this.result;
        } catch (error) {
            alert("error");
        }

    }
}