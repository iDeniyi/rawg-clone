import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "43efa6211a7c4d96b9ee65bc5afab4bf",
    },
});
