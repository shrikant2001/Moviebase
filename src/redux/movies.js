import axios from "axios";

//Get movies data from here
const fetcher = axios.create({
    baseURL: "http://www.omdbapi.com/",
})

export default fetcher;